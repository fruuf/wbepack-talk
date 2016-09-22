/* eslint-disable react/no-multi-comp */
import React, { Component } from 'react';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/cache';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/ignoreElements';

import isFunction from 'lodash/isFunction';
import isString from 'lodash/isString';

const shallowEqual = (objA, objB) =>
  Object.keys(objA).length === Object.keys(objB).length
  && Object.keys(objA).every(key => objA[key] === objB[key])
;

export const connectComponent = (component, createState) => {
  class ObservableContainer extends Component {
    constructor() {
      super();
      this.state = null;
    }

    componentDidMount() {
      this.actionStream = new Subject();
      this.propsStream = new Subject();

      this.dispatch = (type, data) => {
        this.actionStream.next({ type, data });
      };

      const propsStream = this.propsStream
        .startWith(this.props || {})
        .cache(1);

      const listenStream = new Subject();

      this.subscription = listenStream
        .mergeMap(stream => stream.retry(10))
        .startWith({})
        .subscribe(state => this.setState(state));

      const listen = (nameOrStream, stream = false) => {
        if (isString(nameOrStream)) {
          listenStream.next(stream.map(data => ({ [nameOrStream]: data })));
        } else {
          listenStream.next(stream.ignoreElements());
        }
      };

      this.cleanup = createState(
        propsStream,
        this.actionStream.share(),
        listen,
        this.dispatch
      );
    }

    componentWillReceiveProps(nextProps) {
      this.propsStream.next(nextProps);
    }

    componentWillUnmount() {
      this.propsStream.complete();
      this.actionStream.complete();
      this.subscription.unsubscribe();
      if (isFunction(this.cleanup)) this.cleanup();
    }

    render() {
      if (!this.state) return null;
      const { dispatch } = this;
      const props = Object.assign({}, this.props, this.state, { dispatch });
      return React.createElement(component, props);
    }
  }
  return ObservableContainer;
};


export const createPureRenderContainer = component => {
  class PureRenderContainer extends Component {
    shouldComponentUpdate(nextProps) {
      return !shallowEqual(nextProps, this.props);
    }
    render() {
      return React.createElement(component, this.props);
    }
  }
  return PureRenderContainer;
};


export const defineEvent = (actionStream, eventName) => actionStream
  .filter(action => action.type === eventName)
  .pluck('data')
  .share()
;


export const defineForm = (actionStream, defaultStream, eventName = 'change') => defineEvent(actionStream, eventName)
  .scan((data, event) => Object.assign({}, data, { [event.target.name]: event.target.value }), {})
  .startWith({})
  .combineLatest(defaultStream.startWith({}))
  .map(([data, defaultData]) => Object.assign({}, defaultData, data))
  .cache(1)
;

export const defineProp = (propsStream, propName) => propsStream
  .pluck(propName)
  .distinctUntilChanged()
  .cache(1)
;

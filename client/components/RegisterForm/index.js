import React, { Component } from 'react';
import {Card, CardActions, CardTitle} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';


class RegisterForm extends Component {
  constructor() {
    super();
    this.state = {
      step: 1,
      values: {}
    }
    this.onChangeStep = this.onChangeStep.bind(this);
    this.onChangeValue = this.onChangeValue.bind(this);
    this.onFill = this.onFill.bind(this);
  }

  onChangeStep(step) {
    this.setState({step});
  }

  onChangeValue(e) {
    const { values } = this.state;
    const newValues = Object.assign({}, values, {
      [e.target.id]: e.target.value,
    })
    this.setState({values: newValues});
  }

  onFill(defaultValue) {
    return (e) => {
      if(e.keyCode === 191 && e.ctrlKey) {
        const { values } = this.state;
        const newValues = Object.assign({}, values, {
          [e.target.id]: defaultValue,
        })
        this.setState({values: newValues});
      }
    }
  }

  render() {
    const { props, onChangeValue, onChangeStep, onFill } = this;
    const { values, step } = this.state;
    return (
      <Card style={{maxWidth: 400, margin: '0 auto'}}>
        <CardTitle
          title="Register Form"
          subtitle={`register for something big ${step} of 4`}
        />
        { step === 1 && (<Step1 values={values} onChangeValue={onChangeValue} onFill={onFill} />)}
        { step === 2 && (<Step2 values={values} onChangeValue={onChangeValue} onFill={onFill} />)}
        { step === 3 && (<Step3 values={values} onChangeValue={onChangeValue} onFill={onFill} />)}
        { step === 4 && (<Step4 values={values} onChangeValue={onChangeValue} onFill={onFill} />)}
        <CardActions>
          <RaisedButton
            label="Prev"
            disabled={step < 1}
            onClick={() => onChangeStep(step - 1)}
            secondary
          />
          <RaisedButton
            label="Next"
            disabled={step > 4}
            onClick={() => onChangeStep(step + 1)}
            primary
          />
        </CardActions>
      </Card>
    );
  }
}

export default RegisterForm;

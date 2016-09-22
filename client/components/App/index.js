import React, { Component } from 'react'
import './app-styles.scss';
import thumbsUpImage from './thumbs-up.svg';

class App extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    e.preventDefault();
    this.setState({count: this.state.count + 1});
  }

  render() {
    return (
      <div className="app">
        <div className="background">
          <div className="button" onClick={this.onClick}>
            <img src={thumbsUpImage} />
            Sounds good ({this.state.count})
          </div>
        </div>

      </div>
    );
  }
}

export default App;

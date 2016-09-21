import React from 'react';
import {CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';

const successStyle = {
  color: 'red',
}

export default props => (
  <CardText>
    <h1>Thanks for completing the form!</h1>
    <p style={successStyle}>we send you an e-mail</p>
  </CardText>
)

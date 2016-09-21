import React from 'react';
import {CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';


export default props => (
  <CardText>
    <TextField
      id="email"
      onChange={props.onChangeValue}
      onKeyUp={props.onFill('test@example.com')}
      value={props.values.email || ''}
      hintText="type here"
      floatingLabelText="E-Mail"
      floatingLabelFixed
      fullWidth
    />
    <TextField
      id="emailRepeat"
      onChange={props.onChangeValue}
      onKeyUp={props.onFill('test@example.com')}
      value={props.values.emailRepeat || ''}
      hintText="type here"
      floatingLabelText="E-Mail (repeat)"
      floatingLabelFixed
      fullWidth
    />
  </CardText>
)

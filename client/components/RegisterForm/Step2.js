import React from 'react';
import {CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';


export default props => (
  <CardText>
    <TextField
      id="firstName"
      onChange={props.onChangeValue}
      onKeyUp={props.onFill('Test')}
      value={props.values.firstName || ''}
      hintText="type here"
      floatingLabelText="First Name"
      floatingLabelFixed
      fullWidth
    />
    <TextField
      id="lastName"
      onChange={props.onChangeValue}
      onKeyUp={props.onFill('Example')}
      value={props.values.lastName || ''}
      hintText="type here"
      floatingLabelText="Last Name"
      floatingLabelFixed
      fullWidth
    />
  </CardText>
)

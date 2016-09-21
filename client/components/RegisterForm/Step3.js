import React from 'react';
import {CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';


export default props => (
  <CardText>
    <DatePicker
      id="birthday"
      onChange={(e, value) => props.onChangeValue({target: { value, id: 'birthday'}})}
      value={props.values.birthday}
      hintText="pick date"
      floatingLabelText="Your birthday"
      floatingLabelFixed
      fullWidth
    />
    <TextField
      id="city"
      onChange={props.onChangeValue}
      onKeyUp={props.onFill('Melbourne')}
      value={props.values.city || ''}
      hintText="type here"
      floatingLabelText="City of birth"
      floatingLabelFixed
      fullWidth
    />
  </CardText>
)

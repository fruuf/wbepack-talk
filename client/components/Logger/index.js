import React from 'react';

let Logger;

if(process.env.NODE_ENV === 'production') {
  Logger = () => null;
} else {
  require('./logger-styles.scss');
  Logger = () => (
    <div className="logger">
      <p>I handle the logging in development and you wont [FIND_ME] in production</p>
    </div>
  )
}

export default Logger;

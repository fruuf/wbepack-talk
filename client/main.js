import React from 'react';
import App from 'App';

const renderStyle = {
  border: 'dashed 3px #000',
  margin: '40px 0',
  padding: '10px 50px',
  backgroundColor: 'white'
}

export default () => (
  <div style={renderStyle}>
    <App />
  </div>
)

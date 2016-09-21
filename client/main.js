import React from 'react';
import RegisterForm from 'RegisterForm';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

if(!window.injectTapEventPluginHasRun) {
  window.injectTapEventPluginHasRun = true;
  injectTapEventPlugin();
}

export default () => (
  <MuiThemeProvider>
    <RegisterForm />
  </MuiThemeProvider>
)

import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import SvgCircleArc from './SvgCircleArc';
import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';
import MainText from '../components/MainText';

injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#4CAF50',
    accent1Color: '#F44336',
  },
});

const App = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <div>
      <AppHeader />
      <MainText />
      <SvgCircleArc />
      <AppFooter />
    </div>
  </MuiThemeProvider>
);

export default App;

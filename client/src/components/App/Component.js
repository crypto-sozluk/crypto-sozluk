import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Router, Route, Switch } from 'react-router-dom';
import theme from '../../theme';
import history from '../../util/history';
import GlobalStyle from '../../globalStyle';
import HeaderContainer from '../Header/Container';
import ErrorNotificationCon from '../ErrorNotification/Container';
import LoginFormContainer from '../LoginForm/Container';
import SignupFormContainer from '../SignupForm/Container';
import ForgotPassword from '../forgotPassword/ForgotPassword';
import ResetPassword from '../forgotPassword/ResetPassword';
import UpdatePassword from '../forgotPassword/UpdatePassword';
import Home from '../Home';

const App = props => (
  <ThemeProvider theme={theme(props.dark)}>
    <Router history={history}>
      <>
        <GlobalStyle />
        <Route component={HeaderContainer} />
        <Route component={ErrorNotificationCon} />
        <Switch>
          <Route path='/login' component={LoginFormContainer} />
          <Route path='/signup' component={SignupFormContainer} />
          <Route exact path="/reset/:token" component={ResetPassword} />
          <Route exact path="/forgotPassword" component={ForgotPassword} />
          <Route path='/createpost' component={CreatePostFormCon} />
          <Route path='/' component={Home} />
          <Route
            exact
            path="/updatePassword/:username"
           component={UpdatePassword}
      />
        </Switch>
      </>
    </Router>
  </ThemeProvider>
);

export default App;

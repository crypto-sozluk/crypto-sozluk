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
import CreatePostFormCon from '../CreatePostForm/Container';
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
          <Route path="/forgot_password" component={ForgotPassword} />
          <Route path="/reset_password" component={ResetPassword} />
          <Route path='/createpost' component={CreatePostFormCon} />
          <Route path='/' component={Home} />
        </Switch>
      </>
    </Router>
  </ThemeProvider>
);

export default App;

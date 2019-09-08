import React from 'react';
import { Field } from 'redux-form';
import { Link } from 'react-router-dom'
import Form from '../shared/form/Form';
import renderField from '../shared/form/renderField';
import { usernameValidator, passwordValidator } from '../../util/validators';
import SubmitButton from '../shared/form/SubmitButton';

class LoginForm extends React.Component {
  componentDidMount() {
    this.redirectIfLoggedIn();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn() {
    if (this.props.token) this.props.history.push('/');
  }

  onSubmit = ({ username, password }) => {
    this.props.attemptLogin( username, password);
  };

  render() {
    return (
      <Form
        loading={this.props.loading}
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field
          name='username'
          label='kullanici adi'
          type='text'
          component={renderField}
          validate={usernameValidator}
        />
        <Field
          name='password'
          label='sifre'
          type='password'
          component={renderField}
          validate={passwordValidator}
        />
        <Link to="/forgot_password">sifremi unuttum</Link>
        <SubmitButton type='submit'>giris</SubmitButton>
      </Form>
    );
  }
}

export default LoginForm;

import React from 'react';
import { Field } from 'redux-form';
import Form from '../shared/form/Form';
import renderField from '../shared/form/renderField';
//duzenleme
import { emailValidator, usernameValidator, passwordValidator } from '../../util/validators';
import SubmitButton from '../shared/form/SubmitButton';

class SignupForm extends React.Component {
  componentDidMount() {
    this.redirectIfLoggedIn();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn() {
    if (this.props.token) this.props.history.push('/');
  }
  
  //duzenleme
  onSubmit = ({ email, username, password }) => {
    this.props.attemptSignup(email, username, password);
  };

  render() {
    return (
      <Form
        loading={this.props.loading}
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field
          name='email'
          label='email'
          type='text'
          component={renderField}
          validate={emailValidator}
        />        
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
        <Field
          name='password2'
          label='sifre tekrar'
          type='password'
          component={renderField}
        />
        <SubmitButton type='submit'>uye ol</SubmitButton>
      </Form>
    );
  }
}

export default SignupForm;

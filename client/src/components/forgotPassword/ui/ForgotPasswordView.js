import React from 'react';
import { Field, reduxForm  } from 'redux-form';
import Form from '../../shared/form/Form';
import renderField from '../../shared/form/renderField';
import { emailValidator } from '../../../util/validators';
import SubmitButton from '../../shared/form/SubmitButton';

class ForgotPasswordView extends React.Component {
  componentDidMount() {
    this.redirectIfLoggedIn();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn() {
    if (this.props.token) this.props.history.push('/');
  }

  onSubmit = ({ email }) => {
    this.props.forgotPassword( email );
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
        <SubmitButton type='submit'>Reset Password</SubmitButton>
      </Form>
    );
  }
}

const formForgotPass = reduxForm({
  Form: 'email',
  enableReinitialize: true,
})(ForgotPasswordView)

export default formForgotPass;
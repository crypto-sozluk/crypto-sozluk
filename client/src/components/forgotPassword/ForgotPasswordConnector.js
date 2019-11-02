import React from 'react';
import ForgotPasswordView from './ui/ForgotPasswordView';
import { connect } from 'react-redux';
import { attemptForgot } from '../../actions/auth';

const mapStateToProps = state => ({
  loading: state.auth.loading
});

const mapDispatchToProps = { attemptForgot };

const enhance = connect(
    mapStateToProps,
    mapDispatchToProps
  );


const ForgotPasswordConnector = enhance(ForgotPasswordView);

export default ForgotPasswordConnector;

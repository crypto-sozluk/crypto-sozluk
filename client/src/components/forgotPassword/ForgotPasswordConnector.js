import React from 'react';
import ForgotPasswordView from './ui/ForgotPasswordView';

class ForgotPasswordConnector extends React.Component {
    dummy = async (values) => {
        console.log(values);
        return null;
    }

    render() {
        return (
            <ForgotPasswordView submit={this.dummy} />
        );
    }
}

export default ForgotPasswordConnector;
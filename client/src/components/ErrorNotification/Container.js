import { connect } from 'react-redux';
import ErrorNotification from './Component';

const mapStateToProps = state => ({ error: state.error });

const ErrorNotificationCon = connect(mapStateToProps)(ErrorNotification);

export default ErrorNotificationCon;

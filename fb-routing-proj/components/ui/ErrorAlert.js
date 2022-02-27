import classes from '../../styles/ErrorAlert.module.css';

const ErrorAlert = (props) => {
  return <div className={classes.alert}>{props.children}</div>;
};

export default ErrorAlert;

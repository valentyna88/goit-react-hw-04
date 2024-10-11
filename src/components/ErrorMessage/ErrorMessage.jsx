import css from './ErrorMessage.module.css';

const ErrorMessage = () => {
  return <p className={css.error}>An error occurred. Please try again.</p>;
};

export default ErrorMessage;

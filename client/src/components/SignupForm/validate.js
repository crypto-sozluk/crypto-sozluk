const validate = values => {
  if (values.password !== values.password2) {
    return { password2: 'parolalar eslesmeli' };
  }
};

export default validate;

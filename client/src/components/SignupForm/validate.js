const validate = values => {
  if (values.password !== values.password2) {
    return { password2: 'sifreler eslesmeli' };
  }
};

export default validate;

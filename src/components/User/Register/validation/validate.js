const validate = values => {
  const errors = {};
  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 1) {
    errors.password = "Must be 1 characters or more";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.username) {
    errors.username = "Required";
  }

  return errors;
};

export default validate;

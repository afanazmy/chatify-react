import { postNoAuth } from "../../../../reducers/exe";

function composeAsyncValidators(validatorFns) {
  return async (values, dispatch, props, field) => {
    const validatorFn = validatorFns[field];
    await validatorFn(values, dispatch, props, field);
  };
}

const usernameValidate = values => {
  let data = { username: values.username };
  return postNoAuth("user/check-username", data).then(result => {
    if (result.status == "fail" && sessionStorage.getItem("error_email")) {
      sessionStorage.setItem("error_username", result.message);
      throw {
        username: "Username already taken",
        email: "Email already taken"
      };
    } else if (result.status == "fail") {
      sessionStorage.setItem("error_username", result.message);
      throw { username: "Username already taken" };
    } else if (result.status == "success") {
      sessionStorage.removeItem("error_username");
    }
  });
};

const emailValidate = values => {
  let data = { email: values.email };
  return postNoAuth("user/check-email", data).then(result => {
    if (result.status == "fail" && sessionStorage.getItem("error_username")) {
      sessionStorage.setItem("error_email", result.message);
      throw {
        username: "Username already taken",
        email: "Email already taken"
      };
    } else if (result.status == "fail") {
      sessionStorage.setItem("error_email", result.message);
      throw { email: "Email already taken" };
    } else if (result.status == "success") {
      sessionStorage.removeItem("error_email");
    }
  });
};

const asyncValidate = composeAsyncValidators({
  username: usernameValidate,
  email: emailValidate
});

export default asyncValidate;

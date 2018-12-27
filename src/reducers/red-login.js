const modLogin = (state = [], action) => {
  switch (action.type) {
    case "LOGIN_JWT":
      let bearer = "";

      if (action.request.type === "bearer") {
        bearer = "Bearer " + action.request.token;

        localStorage.setItem("bearer", JSON.stringify({ bearer: bearer }));
      } else {
        bearer = "";
      }

      return Object.assign({}, state, { login: bearer });
    case "LOGIN":
      if (action.request.token_type === "Bearer") {
        bearer = action.request.token_type + " " + action.request.access_token;

        localStorage.setItem("bearer", JSON.stringify({ bearer: bearer }));
      } else {
        bearer = "";
      }

      return Object.assign({}, state, { login: bearer });
    case "REGISTER":
      return Object.assign({}, state, { register: action.request });
    case "FORGOT_PASS":
      return Object.assign({}, state, { forgot_pass: action.request });
    case "CHANGE_PASS":
      return Object.assign({}, state, { change_pass: action.request });
    case "GET_PRIVACY":
      return Object.assign({}, state, { privacy: action.request });
    default:
      return state;
  }
};

export default modLogin;

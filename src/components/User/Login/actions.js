import store from "../../../reducers/store";
import { loginJWT } from "../../../reducers/exe";

// gologin
const goLogin = param => {
  // request api
  loginJWT(param).then(function(res) {
    // console.log(res);
    let result = res;
    store.dispatch({
      type: "LOGIN_JWT",
      request: result
    });
  });
};

export { goLogin };

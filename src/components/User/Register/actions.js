import store from "../../../reducers/store";
import { post } from "../../../reducers/exe";

// register
const goRegister = param => {
  post("user", param).then(function(res) {
    let result = res;
    store.dispatch({
      type: "REGISTER",
      request: result
    });
  });
};

export { goRegister };

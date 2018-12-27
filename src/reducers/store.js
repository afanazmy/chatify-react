import { createStore, combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

// login
import modLogin from "./red-login";

let kumpulanReducer = combineReducers({
  modLogin: modLogin,
  form: formReducer
});

let store = createStore(kumpulanReducer);

export default store;

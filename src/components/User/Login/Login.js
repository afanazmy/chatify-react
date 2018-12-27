import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Redirect, withRouter } from "react-router-dom";
import compose from "recompose/compose";

import LoginForm from "./LoginForm";
import { goLogin } from "./actions";

class Login extends Component {
  componentWillMount() {
    var bearer = JSON.parse(localStorage.getItem("bearer"));
    let dataLogin = JSON.parse(localStorage.getItem("dataLogin"));

    if (dataLogin !== null) {
      let data = dataLogin.dataLogin;

      var dataGo = {
        username: data.email,
        password: data.password
      };

      // localStorage.removeItem('dataLogin');
      goLogin(dataGo);
    }
  }

  async login(value) {
    var dataLogin = {
      email: value.email,
      password: value.password
    };

    await goLogin(dataLogin);
  }

  checkLogin = param => {
    var bearer = JSON.parse(localStorage.getItem("bearer"));
    if (param.loginState.modLogin.login !== undefined) {
      if (param.loginState.modLogin.login.length > 0 && bearer === null) {
        return null;
      } else if (param.loginState.modLogin.login.length > 0) {
        this.props.history.push("/discussion");
      }
    }

    if (param.loginState.modLogin.login !== undefined) {
      return false;
    }

    return null;
  };

  render() {
    let login = this.checkLogin(this.props);
    return <LoginForm onSubmit={this.login.bind(this)} login={login} />;
  }
}

const mapStateToProps = state => {
  // console.log(state);
  return { loginState: state };
};

export default compose(connect(mapStateToProps))(withRouter(Login));

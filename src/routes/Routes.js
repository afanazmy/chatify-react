import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import App from "../App";
import Login from "../components/User/Login/Login";
import Register from "../components/User/Register/Register";
import Discussion from "../components/Discussion/Discussion";

const IsNotLoginRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem("bearer") === null ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/discussion",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

const IsLoginRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem("bearer") ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

export const Routes = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      {/* <IndexRoute component={App} /> */}
      <IsNotLoginRoute component={Login} path="/login" />
      <IsNotLoginRoute component={Register} path="/register" />
      <IsLoginRoute component={Discussion} path="/discussion" />
    </div>
  </Router>
);

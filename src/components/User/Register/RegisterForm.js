import React, { Component } from "react";
import { withRouter } from "react-router";
import { Field, reduxForm } from "redux-form";
import compose from "recompose/compose";
import Swal from "sweetalert2";
import validate from "./validation/validate";
import asyncValidate from "./validation/asyncValidate";

import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";

const styles = theme => ({
  main: {
    width: "auto",
    display: "block", // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing.unit
  },
  typografi: {
    marginTop: theme.spacing.unit,
    display: "inline-block"
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  }
});

const textfield = ({
  label,
  className,
  input,
  type,
  meta: { asyncValidating, touched, error }
}) => (
  <TextField
    {...input}
    label={label}
    className={className}
    type={type}
    error={touched && error ? true : false}
    helperText={touched && error ? error : " "}
    margin="dense"
    fullWidth
  />
);

class RegisterForm extends Component {
  constructor(props) {
    super(props);
  }

  loginOnClick() {
    this.props.history.push("/login");
  }

  render() {
    const { classes } = this.props;
    return (
      <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <form className={classes.form}>
            <Field
              className={classes.textField}
              name="username"
              component={textfield}
              type="text"
              label="Username *"
            />
            <Field
              className={classes.textField}
              name="email"
              component={textfield}
              type="email"
              label="Email *"
            />
            <Field
              className={classes.textField}
              name="password"
              component={textfield}
              type="password"
              label="Password *"
            />
            <Typography className={classes.typografi}>
              Don't have account?{" "}
              <Typography
                className={classes.typografi}
                onClick={this.loginOnClick.bind(this)}
                color="primary"
              >
                Login
              </Typography>
            </Typography>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              disabled={
                this.props.invalid ||
                this.props.pristine ||
                this.props.submitting
              }
            >
              Register
            </Button>
          </form>
        </Paper>
      </main>
    );
  }
}

export default compose(
  withStyles(styles),
  reduxForm({
    form: "register",
    validate,
    asyncValidate,
    asyncBlurFields: ["username", "email"]
  })
)(withRouter(RegisterForm));

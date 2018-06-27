import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import Header from "./Header";
import { Link } from "react-router-dom";
import "../common/usernew.css";

import { connect } from "react-redux";
import { createUser } from "../actions";

class UsersNew extends Component {
  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? "has-danger" : ""}`;
    return (
      <div className={className}>
        <label>{field.label}</label>
        <input className="form-control" type="text" {...field.input} />
        <div className="text-help">{touched ? error : ""}</div>
      </div>
    );
  }

  onSubmit(values) {
    this.props.createUser(values, () => {
      this.props.history.push("/");
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <Header />
        <div className="row">
          <div className="col-md-2 col-6">
            <div className="halfrounded">
              <p style={{ marginTop: "1rem" }}>Personal Info</p>
            </div>
          </div>
        </div>

        <div className="container">
          <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <div className="row">
              <div className="col-md-3">
                <Field label="Name" name="name" component={this.renderField} />
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
                <Field
                  label="Email"
                  name="email"
                  component={this.renderField}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-3">
                <Field
                  label="Facebook profile"
                  name="facebook"
                  component={this.renderField}
                />
              </div>

              <div className="col-md-3">
                <Field
                  label="Twitter profile"
                  name="twitter"
                  component={this.renderField}
                />
              </div>
              <div className="col-md-3">
                <Field
                  label="LinkedIn profile"
                  name="linkedin"
                  component={this.renderField}
                />
              </div>
            </div>
            <div className="float-right">
              <button
                className="btn btn-primary"
                type="submit"
                style={{ width: "150px" }}>
                Save
              </button>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Link
                to="/"
                className="btn btn-danger"
                style={{ width: "150px" }}>
                Next
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.name) {
    errors.name = "Enter the name";
  }

  if (!values.email) {
    errors.email = "Enter the email";
  }

  if (!values.facebook) {
    errors.facebook = "Enter the facebook id";
  }

  if (!values.twitter) {
    errors.twitter = "Enter the twitter id";
  }

  if (!values.linkedin) {
    errors.linkedin = "Enter the linkedin id";
  }

  return errors;
}

export default reduxForm({
  validate,
  form: "UsersNewForm "
})(connect(null, { createUser })(UsersNew));

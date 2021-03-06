import { Component } from "react";
import { RouteComponentProps } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import AuthService from "../services/auth.service";
import logo from '../assests/logo-diamond.png';

interface RouterProps {
  history: string;
}

type Props = RouteComponentProps<RouterProps>;

type State = {
  username: string,
  password: string,
  loading: boolean,
  message: string
};

export default class Login extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);

    this.state = {
      username: "",
      password: "",
      loading: false,
      message: ""
    };
  }

  validationSchema() {
    return Yup.object().shape({
      username: Yup.string().required("Username is required!"),
      password: Yup.string().required("Password is required!"),
    });
  }

  handleLogin(formValue: { username: string; password: string }) {
    const { username, password } = formValue;

    this.setState({
      message: "",
      loading: true
    });


    AuthService.login(username, password).then(
      () => {
        this.props.history.push("/profile");
        window.location.reload();
      },
      error => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        this.setState({
          loading: false,
          message: resMessage
        });
      }
    );
  }

  render() {
    const { loading, message } = this.state;

    const initialValues = {
      username: "",
      password: "",
    };

    return (
      <div className="form-signin w-25 m-auto text-center py-5">
          <img src={logo} alt="logo-login"/>

         <Formik
            initialValues={initialValues}
            validationSchema={this.validationSchema}
            onSubmit={this.handleLogin}
          >
            <Form>
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

              <div className="form-group">
                <Field name="username" type="text" className="form-control" placeholder="Username" />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="alert alert-danger"
                />
              </div>

              <div className="form-group">

                <Field name="password" type="password" className="form-control" placeholder="Password" />

                <ErrorMessage
                  name="password"
                  component="div"
                  className="alert alert-danger"
                />
              </div>

              <div className="form-group">
                <button type="submit" className="btn btn-info btn-block" disabled={loading}>
                  {loading && (
                    <span className="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
                  )}
                  Login
                </button>
              </div>

              {message && (
                <div className="form-group">
                  <div className="alert alert-danger" role="alert">
                    {message}
                  </div>
                </div>
              )}
            </Form>
          </Formik>
      </div>
    );
  }
}

import { Formik, Field, Form } from "formik";
import { Component } from "react";
import { Deck } from "../cards/deck";

type Props = {};

type State = {
  content: string;
  loading: boolean;
  message: string;
};

export default class NewSession extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.handleCreate = this.handleCreate.bind(this);

    this.state = {
      content: "",
      loading: true,
      message: "",
    };
  }

  componentDidMount() {
    this.setState({
        message: "",
        loading: false,
      });}

  handleCreate(formValue: { sessionName: string }) {
    this.setState({
      message: "",
      loading: true,
    });
  }

  render() {
    const { loading, message } = this.state;

    const initialValues = {
      sessionName: ""
    };

    return (
      <div className="px-4 py-5 my-5 text-center">
        <h1 className="display-5 fw-bold">New session</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">Choose a name and a deck for your game</p>
          <Formik initialValues={initialValues} onSubmit={this.handleCreate}>
            <Form>
              <div className="form-group">
                <Field
                  name="sessionName"
                  type="text"
                  className="form-control"
                  placeholder="Session name"
                />
              </div>

              <div className="form-group">
                <Deck />
              </div>

              <div className="form-group">
                <button
                  type="submit"
                  className="btn btn-info btn-block"
                  disabled={loading}
                >
                  {loading && (
                    <span className="spinner-grow spinner-grow-sm"></span>
                  )}
                  <span>Go</span>
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
      </div>
    );
  }
}

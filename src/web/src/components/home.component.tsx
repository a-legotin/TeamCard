import { Component } from "react";

type Props = {};

type State = {
  content: string;
}

export default class Home extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      content: ""
    };
  }


  render() {
    return (

      <div className="px-4 py-5 my-5 text-center">
      <h1 className="display-5 fw-bold">Poker planning for agile teams</h1>
      <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">Teams use it during their planning sessions. Have fun while being productive!</p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <a className="btn btn-info" href="sessions/new">Start new session</a>
          </div>
          </div>
      </div>
    );
  }
}

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
        <div className="d-flex justify-content-center align-items-center">
          <div className="col-md-8 mx-auto text-center">
            <h1 className="display-4 font-weight-normal">Poker planning for agile teams</h1>
            <p className="lead font-weight-normal">Teams use this application during their planning sessions. Have fun while being productive!</p>
            <a className="btn btn-info" href="sessions/new">Start new session</a>
          </div>
        </div>
    );
  }
}

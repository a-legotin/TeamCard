import { Component } from "react";

type Props = {};

type State = {
    content: string;
}

export default class NewSession extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            content: ""
        };
    }


    render() {
        return (
            <div className="px-4 py-5 my-5 text-center">
                <h1 className="display-5 fw-bold">New session</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">Choose a name and a deck for your game</p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <button type="button" className="w-50 btn btn-md btn-info">Go</button>
                    </div>
                </div>
            </div>
        );
    }
}

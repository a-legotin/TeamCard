import { Component } from "react";
import Select from "react-select";

type Props = {};

type State = {
  content: string;
  loading: boolean;
  message: string;
};

export default class Deck extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      content: "",
      loading: false,
      message: "",
    };
  }

  render() {
    const { loading, message } = this.state;

    const options = [
      {
        id: "a",
        description: "Fibonacci",
        cards: [
          { description: "0", value: "0" },
          { description: "1/2", value: "1/2" },
        ],
      },
      {
        id: "b",
        description: "T-shirts",
        cards: [
          { description: "xs", value: "xs" },
          { description: "s", value: "s" },
        ],
      },
      {
        id: "c",
        description: "Power of 2",
        cards: [
          { description: "1", value: "1" },
          { description: "2", value: "2" },
        ],
      },
    ];

    return (
      <>
        <Select
          name="deck"
          options={options}
          getOptionLabel={(option) =>
            `${option.description} (${option.cards
              .map((it) => it.description)
              .join(", ")})`
          }
          getOptionValue={(option) => option.id}
          defaultValue={options[0]}
        />
      </>
    );
  }
}

import Select from "react-select";
import { defaultDecks } from "../../features/deck/deckSlice";
import { useAppSelector } from "../../store/hooks";

export function Deck() {
  const options = useAppSelector(defaultDecks);

  return (
      <>
        <Select
          name="deck"
          options={options}
          getOptionLabel={(option) =>
            option?.cards == null
            ? ''
            : `${option.description} (${option.cards
              .map((it: { description: any; }) => it.description)
              .join(", ")})`
          }
          getOptionValue={(option) => option.id}
          defaultValue={options[0]}
        />
      </>
    );
}

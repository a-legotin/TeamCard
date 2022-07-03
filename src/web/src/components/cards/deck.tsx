import { useState } from "react";
import Select, {
  components,
  MenuListProps,
} from "react-select";
import { defaultDecks } from "../../features/deck/deckSlice";
import { useAppSelector } from "../../store/hooks";
import IDeck from "../../types/deck.type";
import { NewDeckModal } from "./new-deck";

export function Deck() {
  const options = useAppSelector(defaultDecks);

  const [modalShow, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const MenuList = (props: MenuListProps<IDeck, false>) => {
    return (
      <components.MenuList {...props}>
        {props.children}
        <hr />
        <button
          type="button"
          onClick={handleShow}
          className="btn btn-info btn-block"
        >
          Create new deck
        </button>
      </components.MenuList>
    );
  };

  return (
    <>
      <Select
        name="deck"
        options={options}
        getOptionLabel={(option) =>
          option?.cards == null
            ? ""
            : `${option.description} (${option.cards
                .map((it: { description: any }) => it.description)
                .join(", ")})`
        }
        getOptionValue={(option) => option.id}
        defaultValue={options[0]}
        components={{ MenuList }}
      />
     
     <NewDeckModal 
        show={modalShow}
        onHide={handleClose} />
    </>
  );
}

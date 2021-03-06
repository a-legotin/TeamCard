import { Button, Modal, ModalProps } from "react-bootstrap";
import { addCustomDeck } from "../../features/deck/deckSlice";
import { useAppDispatch } from "../../store/hooks";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import IDeckCard from "../../types/card.type";
import { DeckPreview } from "./deck-preview";

export function NewDeckModal(props: ModalProps) {
  const newDeck = {
    description: "My deck",
    cardsString: "1,2,3",
  };

  const dispatch = useAppDispatch();

  const [{ description, cardsString }, setState] = useState(newDeck);

  const clearState = () => {
    setState({ ...newDeck });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  function composeCards(): IDeckCard[] {
    return cardsString.split(",").map((item: string) => ({
      value: item.trim(),
      description: item.trim(),
    })) as IDeckCard[];
  }

  function handleSave(modalProps: ModalProps) {
    dispatch(
      addCustomDeck({
        id: uuidv4(),
        description: description,
        cards: composeCards(),
      })
    );

    clearState();
    if (modalProps.onHide) modalProps.onHide();
  }

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Create custom deck
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Deck name"
              aria-label="Deck name"
              name="description"
              value={description}
              onChange={handleChange}
            />
          </div>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Deck cards"
              aria-label="Deck cards"
              name="cardsString"
              value={cardsString}
              onChange={handleChange}
            />
          </div>
        </Modal.Body>
        <DeckPreview deckCards={composeCards()}></DeckPreview>

        <Modal.Footer>
          <Button onClick={props.onHide} variant="secondary">
            Close
          </Button>
          <Button
            type="submit"
            onClick={() => handleSave(props)}
            variant="info"
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

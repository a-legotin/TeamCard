import { Button, Modal, ModalProps } from "react-bootstrap";

export function NewDeckModal(props: ModalProps) {
  return (
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
          />
        </div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Deck cards"
            aria-label="Deck cards"
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} variant="secondary">
          Close
        </Button>
        <Button onClick={props.onHide} variant="info">
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

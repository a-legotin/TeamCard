import IDeckCard from "../../types/card.type";

export function DeckPreview({ deckCards }: { deckCards: IDeckCard[] }) {
  return (
    <>
      <div className="container">
        <h5>Preview</h5>
        <div className="card-deck">
          {deckCards.length > 0 &&
            deckCards.map((card, i) => {
              return (
                <div className="col-sm-2">
                <div className="card text-white bg-info mb-4">
                  <div className="card-body align-items-center d-flex justify-content-center">
                    <h5 className="card-title">{card.description}</h5>
                  </div>
                </div></div>
              );
            })}
        </div>
      </div>
    </>
  );
}

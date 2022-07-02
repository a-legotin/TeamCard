import IDeckCard from "./card.type";

export default interface IDeck {
    id: string,
    description: string,
    cards: IDeckCard[]
  }
import IDeckCard from "./card.type";

export default interface IDeck {
    id?: string | null,
    description?: string | null,
    cards?: IDeckCard[]
  }
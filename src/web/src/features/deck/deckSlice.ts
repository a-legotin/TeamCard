import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import IDeck from "../../types/deck.type";
import { uuid } from "uuidv4";

export interface IDeckState {
  defaultDeckList: IDeck[];
  customDeckList: IDeck[];
}

const deckState: IDeckState = {
  defaultDeckList: [
    {
      id: uuid(),
      description: "Fibonacci",
      cards: [
        { description: "0", value: "0" },
        { description: "1/2", value: "1/2" },
      ],
    },
    {
      id: uuid(),
      description: "T-shirts",
      cards: [
        { description: "xs", value: "xs" },
        { description: "s", value: "s" },
        { description: "m", value: "m" },
        { description: "l", value: "l" },
        { description: "xl", value: "xl" },
      ],
    },
    {
      id: uuid(),
      description: "Power of 2",
      cards: [
        { description: "1", value: "1" },
        { description: "2", value: "2" },
        { description: "4", value: "4" },
        { description: "8", value: "8" },
        { description: "16", value: "16" },
        { description: "32", value: "32" },
        { description: "64", value: "64" },
      ],
    },
  ],

  customDeckList: [],
};

export const deckSlice = createSlice({
  name: "deck",
  initialState: deckState,
  reducers: {
    addCustomDeck: (state, action: PayloadAction<IDeck>) => {
      state.customDeckList.push(action.payload);
    },
  },
});

export const { addCustomDeck } = deckSlice.actions;
export const defaultDecks = (state: RootState) => state.deck.defaultDeckList;
export const allDecks = (state: RootState) => [
  ...state.deck.defaultDeckList,
  ...state.deck.customDeckList,
];
export default deckSlice.reducer;

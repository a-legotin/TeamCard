import { createSlice, } from '@reduxjs/toolkit';
import { RootState} from '../../store/store';
import IDeck from '../../types/deck.type';


export interface IDeckState {
  defaultDeckList: IDeck[];
}

const deckState: IDeckState = {
  defaultDeckList: [
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
        { description: "m", value: "m" },
        { description: "l", value: "l" },
        { description: "xl", value: "xl" },
      ],
    },
    {
      id: "c",
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
};


export const deckSlice = createSlice({
  name: 'deck',
  initialState: deckState,
  reducers: {
  }
});

export const defaultDecks = (state: RootState) => state.deck.defaultDeckList;
export default deckSlice.reducer;

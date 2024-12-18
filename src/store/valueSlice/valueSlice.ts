// valueSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ValueState {
  fromValue: number;
  toValue: number;
}

const initialState: ValueState = {
  fromValue: 0,
  toValue: 100,
};

const valueSlice = createSlice({
  name: "values",
  initialState,
  reducers: {
    setValues: (
      state,
      action: PayloadAction<{ fromValue: number; toValue: number }>
    ) => {
      state.fromValue = action.payload.fromValue;
      state.toValue = action.payload.toValue;
    },
  },
});

export const { setValues } = valueSlice.actions;
export default valueSlice.reducer;

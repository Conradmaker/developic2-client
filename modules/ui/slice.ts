import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UIState } from '.';

const initialState: UIState = {
  toastPopUp: { message: null, open: false, visible: false },
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toastOpen(state, action: PayloadAction<string>) {
      state.toastPopUp = { message: action.payload, open: true, visible: true };
    },
    toastClose(state) {
      state.toastPopUp.visible = false;
    },
    toastInitialize(state) {
      state.toastPopUp = { message: null, open: false, visible: false };
    },
  },
});

export const { toastClose, toastInitialize, toastOpen } = uiSlice.actions;
export default uiSlice.reducer;

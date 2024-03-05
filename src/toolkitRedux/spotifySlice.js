import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  switches: JSON.parse(localStorage.getItem('switches')) || 'dark',
  open: JSON.parse(localStorage.getItem('open')) !== null ? JSON.parse(localStorage.getItem('open')) : true,
};

const spotifySlice = createSlice({
  name: 'spotify',
  initialState,
  reducers: {
    switchesColor(state, action) {
      // eslint-disable-next-line no-param-reassign
      state.switches = action.payload;
      localStorage.setItem('switches', JSON.stringify(state.switches));
    },
    toggleOpenClose(state, action) {
      // eslint-disable-next-line no-param-reassign
      state.open = action.payload;
      localStorage.setItem('open', JSON.stringify(state.open));
    },
  },
});

export default spotifySlice.reducer;
export const { switchesColor, toggleOpenClose } = spotifySlice.actions;

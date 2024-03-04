import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    switches: JSON.parse(localStorage.getItem('switches')) || "dark",
};

const spotifySlice = createSlice({
    name: 'spotify',
    initialState,
    reducers: {
        switchesColor(state, action) {
            state.switches = action.payload;
            localStorage.setItem('switches', JSON.stringify(state.switches));
        },
    },
});

export default spotifySlice.reducer;
export const { switchesColor } = spotifySlice.actions;
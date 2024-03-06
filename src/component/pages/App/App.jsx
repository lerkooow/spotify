/* eslint-disable max-len */
import { useDispatch, useSelector } from 'react-redux';

import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import Navigation from '../../Navigation/Navigation';
import Main from '../../Main/Main';
import FriendActivity from '../../FriendActivity/FriendActivity';

import { switchesColor, toggleOpenClose } from '../../../toolkitRedux/spotifySlice';

import './App.scss';

// eslint-disable-next-line react/prop-types
function App({ navigation, top, mix }) {
  const { switches, open } = useSelector((state) => state.spotify);
  const dispatch = useDispatch();

  const handleSwitchChange = () => {
    const newSwitchValue = switches === 'dark' ? 'light' : 'dark';
    dispatch(switchesColor(newSwitchValue));
  };

  const toggleOpen = () => {
    dispatch(toggleOpenClose(!open));
  };

  const darkTheme = createTheme({
    palette: {
      mode: switches === 'dark' ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <div className={open ? 'App' : 'App_close'}>
        <Navigation top={top} navigation={navigation} switches={switches} />
        <Main toggleOpen={toggleOpen} open={open} mix={mix} switches={switches} handleSwitchChange={handleSwitchChange} navigation={navigation} />
        {open && <FriendActivity toggleOpen={toggleOpen} switches={switches} />}
      </div>
    </ThemeProvider>
  );
}

export default App;

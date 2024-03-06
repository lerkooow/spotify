/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material';
import MainLibrary from '../../MainLibrary/MainLibrary';
import FriendActivity from '../../FriendActivity/FriendActivity';
import Navigation from '../../Navigation/Navigation';

import styles from './Library.module.scss';
import { switchesColor, toggleOpenClose } from '../../../toolkitRedux/spotifySlice';

function Library({
  top, navigation, playlists,
}) {
  const switches = useSelector((state) => state.spotify.switches);
  const dispatch = useDispatch();
  const open = useSelector((state) => state.spotify.open);

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
      <div className={open ? styles.library : styles.library_close}>
        <Navigation top={top} navigation={navigation} switches={switches} />
        <MainLibrary
          switches={switches}
          playlists={playlists}
          handleSwitchChange={handleSwitchChange}
          open={open}
          toggleOpen={toggleOpen}
        />
        {open && <FriendActivity toggleOpen={toggleOpen} switches={switches} />}
      </div>
    </ThemeProvider>
  );
}

export default Library;

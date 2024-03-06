/* eslint-disable react/prop-types */
import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material';
import styles from './PlaylistLibrary.module.scss';
import FriendActivity from '../../FriendActivity/FriendActivity';
import Navigation from '../../Navigation/Navigation';
import MainPlaylistLibrary from '../../MainPlaylistLibrary/MainPlaylistLibrary';
import { switchesColor, toggleOpenClose } from '../../../toolkitRedux/spotifySlice';

function PlaylistLibrary({ top, navigation, playlists }) {
  const { title } = useParams();
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
      <div className={open ? styles.liked : styles.liked_close}>
        <Navigation top={top} navigation={navigation} switches={switches} />
        <MainPlaylistLibrary
          title={title}
          playlists={playlists}
          handleSwitchChange={handleSwitchChange}
          toggleOpen={toggleOpen}
          switches={switches}
          open={open}
        />
        {open && <FriendActivity toggleOpen={toggleOpen} switches={switches} />}
      </div>
    </ThemeProvider>
  );
}

export default PlaylistLibrary;

/* eslint-disable react/prop-types */
/* eslint-disable import/no-duplicates */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material';
import Navigation from '../../Navigation/Navigation';
import MainSearch from '../../MainSearch/MainSearch';
import FriendActivity from '../../FriendActivity/FriendActivity';

import browse1 from '../../../img/browse/Search Genre 1.png';
import browse2 from '../../../img/browse/Frame 52.png';
import browse3 from '../../../img/browse/Frame 53.png';
import browse5 from '../../../img/browse/Search Genre 2.png';
import browse6 from '../../../img/browse/Frame 55.png';
import browse7 from '../../../img/browse/Frame 55.png';
import browse8 from '../../../img/browse/Frame 57.png';
import browse9 from '../../../img/browse/Search Genre 3.png';
import browse10 from '../../../img/browse/Frame 58.png';
import browse11 from '../../../img/browse/Frame 59.png';
import browse12 from '../../../img/browse/Frame 60.png';
import browse13 from '../../../img/browse/Search Genre 4.png';
import browse14 from '../../../img/browse/Frame 61.png';
import browse15 from '../../../img/browse/Frame 62.png';
import browse16 from '../../../img/browse/Frame 63.png';
import browse17 from '../../../img/browse/Search Genre 5.png';
import browse18 from '../../../img/browse/Frame 64.png';
import browse19 from '../../../img/browse/Frame 65.png';
import browse20 from '../../../img/browse/Frame 66.png';

import styles from './Search.module.scss';
import { switchesColor, toggleOpenClose } from '../../../toolkitRedux/spotifySlice';

const browseAll = [
  {
    id: 'podcast',
    img: browse1,
  },
  {
    id: 'made-for-you',
    img: browse2,
  },
  {
    id: 'charts',
    img: browse3,
  },
  {
    id: 'new-releases',
    img: browse18,
  },
  {
    id: 'discover',
    img: browse5,
  },
  {
    id: 'concerts',
    img: browse6,
  },
  {
    id: 'r&b',
    img: browse7,
  },
  {
    id: 'frequency',
    img: browse8,
  },
  {
    id: 'christian&gospel',
    img: browse9,
  },
  {
    id: 'soul',
    img: browse10,
  },
  {
    id: 'chill',
    img: browse11,
  },
  {
    id: 'mood',
    img: browse12,
  },
  {
    id: 'equal',
    img: browse13,
  },

  {
    id: 'alternative',
    img: browse14,
  },
  {
    id: 'workout',
    img: browse15,
  },
  {
    id: 'party',
    img: browse16,
  },
  {
    id: 'pop',
    img: browse17,
  },
  {
    id: 'hip-hop',
    img: browse18,
  },
  {
    id: 'afro',
    img: browse19,
  },
  {
    id: 'rewind',
    img: browse20,
  },
];

function Search({
  top, navigation,
}) {
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
      <div className={open ? styles.search : styles.search_close}>
        <Navigation top={top} navigation={navigation} switches={switches} />
        <MainSearch
          browseAll={browseAll}
          switches={switches}
          handleSwitchChange={handleSwitchChange}
          navigation={navigation}
          open={open}
          toggleOpen={toggleOpen}
        />
        {open && <FriendActivity toggleOpen={toggleOpen} switches={switches} />}
      </div>
    </ThemeProvider>
  );
}
export default Search;

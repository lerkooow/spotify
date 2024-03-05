/* eslint-disable max-len */
import { useDispatch, useSelector } from 'react-redux';

import React from 'react';
import Navigation from '../../Navigation/Navigation';
import Main from '../../Main/Main';
import FriendActivity from '../../FriendActivity/FriendActivity';

import { switchesColor, toggleOpenClose } from '../../../toolkitRedux/spotifySlice';

import './App.scss';

// eslint-disable-next-line react/prop-types
function App({ navigation, top, mix }) {
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

  return (
    open ? (
      <div className="App">
        <Navigation top={top} navigation={navigation} switches={switches} />
        <Main toggleOpen={toggleOpen} open={open} mix={mix} switches={switches} handleSwitchChange={handleSwitchChange} navigation={navigation} />
        <FriendActivity toggleOpen={toggleOpen} />
      </div>
    ) : (
      <div className="App_close">
        <Navigation top={top} navigation={navigation} switches={switches} />
        <Main toggleOpen={toggleOpen} open={open} mix={mix} switches={switches} handleSwitchChange={handleSwitchChange} navigation={navigation} />
      </div>
    )
  );
}

export default App;

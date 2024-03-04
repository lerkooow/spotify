import { useDispatch, useSelector } from "react-redux";

import Navigation from "../../Navigation/Navigation";
import Main from "../../Main/Main";
import FriendActivity from "../../FriendActivity/FriendActivity";

import { switchesColor } from "../../../toolkitRedux/spotifySlice";

import "./App.scss";


function App({ navigation, top, mix }) {

  const switches = useSelector((state) => state.spotify.switches);
  const dispatch = useDispatch();

  const handleSwitchChange = () => {
    const newSwitchValue = switches === "dark" ? "light" : "dark";
    dispatch(switchesColor(newSwitchValue));
  };

  return (
    <div className="App">
      <Navigation top={top} navigation={navigation} switches={switches} />
      <Main mix={mix} switches={switches} handleSwitchChange={handleSwitchChange} navigation={navigation} />
      <FriendActivity />
    </div>
  );
}

export default App;

import MainLibrary from "../../MainLibrary/MainLibrary";
import FriendActivity from "../../FriendActivity/FriendActivity";
import Navigation from "../../Navigation/Navigation";

import styles from "../Library/Library.module.scss";

const Library = ({ top, navigation, switches, playlists }) => {

    return (
        <div className={styles.library}>
            <Navigation top={top} navigation={navigation} />
            <MainLibrary switches={switches} playlists={playlists} />
            <FriendActivity />
        </div>
    )
}

export default Library;
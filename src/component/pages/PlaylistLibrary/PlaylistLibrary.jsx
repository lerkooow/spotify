import styles from "./PlaylistLibrary.module.scss";
import FriendActivity from "../../FriendActivity/FriendActivity";
import Navigation from "../../Navigation/Navigation";
import { useParams } from "react-router-dom";
import MainPlaylistLibrary from "../../MainPlaylistLibrary/MainPlaylistLibrary";

const PlaylistLibrary = ({ top, navigation, playlists }) => {
    const { title } = useParams();

    return (
        <div className={styles.liked}>
            <Navigation top={top} navigation={navigation} />
            <MainPlaylistLibrary title={title} playlists={playlists} />
            <FriendActivity />
        </div>
    )
}

export default PlaylistLibrary;
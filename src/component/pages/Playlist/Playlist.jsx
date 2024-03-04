import styles from "./Playlist.module.scss";
import FriendActivity from "../../FriendActivity/FriendActivity";
import Navigation from "../../Navigation/Navigation";
import { useParams } from "react-router-dom";
import MainPlaylist from "../../MainPlaylist/MainPlaylist";

const Playlist = ({ top, navigation, mix }) => {
    const { title } = useParams();

    return (
        <div className={styles.liked}>
            <Navigation top={top} navigation={navigation} />
            <MainPlaylist title={title} mix={mix} />
            <FriendActivity />
        </div>
    )
}

export default Playlist;
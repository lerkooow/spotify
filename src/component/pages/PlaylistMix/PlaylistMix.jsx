import styles from "./PlaylistMix.module.scss";
import FriendActivity from "../../FriendActivity/FriendActivity";
import Navigation from "../../Navigation/Navigation";
import { useParams } from "react-router-dom";
import MainPlaylistMix from "../../MainPlaylistMix/MainPlaylistMix";

const PlaylistMix = ({ top, navigation, mix }) => {
    const { title } = useParams();

    return (
        <div className={styles.liked}>
            <Navigation top={top} navigation={navigation} />
            <MainPlaylistMix title={title} mix={mix} />
            <FriendActivity />
        </div>
    )
}

export default PlaylistMix;
import styles from "./LikedSong.module.scss";
import FriendActivity from "../../FriendActivity/FriendActivity";
import Navigation from "../../Navigation/Navigation";
import MainLiked from "../../MainLiked/MainLiked";

const LikedSong = ({ top, navigation }) => {
    return (
        <div className={styles.liked}>
            <Navigation top={top} navigation={navigation} />
            <MainLiked />
            <FriendActivity />
        </div>
    )
}

export default LikedSong
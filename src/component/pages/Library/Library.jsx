import MainLibrary from "../../MainLibrary/MainLibrary";
import FriendActivity from "../../FriendActivity/FriendActivity";
import Navigation from "../../Navigation/Navigation";

import playlist1 from "../../../img/playlist/Screenshot 2022-06-04 at 20.05 (1).png";
import playlist2 from "../../../img/playlist/Screenshot 2022-06-04 at 20.05 (2).png";
import playlist3 from "../../../img/playlist/Screenshot 2022-06-04 at 20.05 (3).png";
import playlist4 from "../../../img/playlist/Screenshot 2022-06-04 at 20.05.png";
import playlist5 from "../../../img/playlist/Screenshot 2022-06-04 at 20.09 (1).png";
import playlist6 from "../../../img/playlist/Album Art (1).png";

import styles from "../Library/Library.module.scss";

const Library = ({ top, navigation, switches }) => {

    const playlists = [
        {
            id: "happy-hits",
            img: playlist4,
            title: "Happy Hits!",
            description: "Hits to boost your mood and fill you wi..."
        },
        {
            id: "anime-lofi",
            img: playlist6,
            title: "Anime Lofi & Ch...",
            description: "Experience the best Anime moments aga..."
        },
        {
            id: "afro",
            img: playlist1,
            title: "Afro “Select” Vi...",
            description: "A compilation of hit African songs I cons..."
        },
        {
            id: "instrumental",
            img: playlist2,
            title: "Instrumental St...",
            description: "A soft musical backdrop for your st..."
        },
        {
            id: "pop-mix",
            img: playlist3,
            title: "Pop Mix",
            description: "Hey Violet, VÉRITÉ, Timeflies and more"
        },
        {
            id: "chill-mix",
            img: playlist5,
            title: "Chill Mix",
            description: "Julia Wolf, Khalid, ayokay and more"
        }
    ]

    return (
        <div className={styles.library}>
            <Navigation top={top} navigation={navigation} />
            <MainLibrary switches={switches} playlists={playlists} />
            <FriendActivity />
        </div>
    )
}

export default Library;
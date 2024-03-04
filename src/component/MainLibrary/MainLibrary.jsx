import HeaderMainLibrary from "../HeaderMainLibrary/HeaderMainLibrary";

import styles from "../MainLibrary/MainLibrary.module.scss";

const MainLibrary = ({ switches, handleSwitchChange, playlists }) => {
    return (
        <div className={styles.main_dark}>
            <div className={styles.wrapper}>
                <HeaderMainLibrary switches={switches} handleSwitchChange={handleSwitchChange} />
                <div className={styles.title_playlists}>
                    <h1>Playlists</h1>
                </div>
                <div className={styles.playlists}>
                    <div className={styles.items_playlist}>
                        <div className={styles.liked_songs}>
                            <p className={styles.liked_song}>Adekunle Gold <span>Here For Ya</span>,
                                Julia Wolf <span>Pillow</span>,
                                Claud <span>If I Were You</span>,
                                The Wldlfe <span>The Other...</span>
                                Yoke Lore <span>Goodpain</span>,
                                Ayra Starr <span>Memories...</span>
                            </p>
                            <p className={styles.liked_songs_title}>Liked Songs</p>
                            <p className={styles.liked_songs_number}>607 liked songs</p>
                        </div>
                        {playlists.map((item) => (
                            <div className={styles.item_playlist}>
                                <img className={styles.img_playlist} src={item.img} alt={item.id} key={item.id} />
                                <p className={styles.title_playlist}>{item.title}</p>
                                <p className={styles.description_playlist}>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainLibrary;
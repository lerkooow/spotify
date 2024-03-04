import { PiUserCirclePlusThin } from "react-icons/pi";
import { IoMdClose } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import { Box } from "@mui/system";
import { Button, Skeleton } from "@mui/material";

import styles from "../FriendActivity/FriendActivity.module.scss";

const FriendActivity = () => {
    return (
        <div className={styles.friend}>
            <div className={styles.wrapper}>
                <div className={styles.friend_header}>
                    <p className={styles.title_friend}>Friend Activity</p>
                    <div className={styles.icons_friend}>
                        <PiUserCirclePlusThin className={styles.icon_friend} style={{ color: "white" }} />
                        <IoMdClose className={styles.icon_close} style={{ color: "white" }} />
                    </div>
                </div>
                <div>
                    <p className={styles.friend_description}>
                        Let friends and followers on Spotify see what you’re listening to.
                    </p>
                    <div className={styles.avatar_skeleton}>
                        <div className={styles.box}>
                            <RxAvatar className={styles.avatar} />
                            <Box>
                                <Skeleton className={styles.skeleton_one} />
                                <Skeleton className={styles.skeleton_two} animation="wave" />
                                <Skeleton className={styles.skeleton_three} animation={false} />
                            </Box>
                        </div>
                        <div className={styles.box}>
                            <RxAvatar className={styles.avatar} />
                            <Box>
                                <Skeleton className={styles.skeleton_one} />
                                <Skeleton className={styles.skeleton_two} animation="wave" />
                                <Skeleton className={styles.skeleton_three} animation={false} />
                            </Box>
                        </div>
                        <div className={styles.box}>
                            <RxAvatar className={styles.avatar} />
                            <Box>
                                <Skeleton className={styles.skeleton_one} />
                                <Skeleton className={styles.skeleton_two} animation="wave" />
                                <Skeleton className={styles.skeleton_three} animation={false} />
                            </Box>
                        </div>
                    </div>
                    <p className={styles.friend_description}>
                        Go to Settings "&gt;" Social and enable “Share my listening activity on Spotify.’ You can turn this off at any time.
                    </p>
                    <Button sx={{
                        display: 'grid',
                        backgroundColor: '#fff',
                        color: '#000',
                        borderRadius: '40px',
                        width: '233px',
                        height: '62px',
                        fontSize: '18px',
                        margin: '0 auto',
                    }}>
                        <p>SETTINGS</p>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default FriendActivity;
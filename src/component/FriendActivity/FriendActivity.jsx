/* eslint-disable react/prop-types */
import React from 'react';
import { PiUserCirclePlusThin } from 'react-icons/pi';
import { IoMdClose } from 'react-icons/io';
import { RxAvatar } from 'react-icons/rx';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Box } from '@mui/system';
import { Button, Skeleton } from '@mui/material';

import { useTranslation } from 'react-i18next';
import styles from './FriendActivity.module.scss';

function FriendActivity({ toggleOpen }) {
  const { t } = useTranslation();

  return (
    <div className={styles.friend}>
      <div className={styles.wrapper}>
        <div className={styles.friend_header}>
          <p className={styles.title_friend}>{t('friend.friendTitle')}</p>
          <div className={styles.icons_friend}>
            <Button sx={{ borderRadius: '50px' }}>
              <PiUserCirclePlusThin className={styles.icon_friend} />
            </Button>
            <Button sx={{ borderRadius: '50px' }} onClick={toggleOpen}>
              <IoMdClose className={styles.icon_close} />
            </Button>
          </div>
        </div>
        <div>
          <p className={styles.friend_description}>
            {t('friend.friendDescr')}
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
            {t('friend.friendSett')}
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
          }}
          >
            <p>
              {t('friend.friendButton')}
            </p>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default FriendActivity;

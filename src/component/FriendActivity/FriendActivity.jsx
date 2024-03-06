/* eslint-disable react/prop-types */
import React from 'react';
import { PiUserCirclePlusThin } from 'react-icons/pi';
import { IoMdClose } from 'react-icons/io';
import { RxAvatar } from 'react-icons/rx';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Box } from '@mui/system';
import {
  Button, Paper, Skeleton, Typography,
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import { useTheme } from '@emotion/react';
import styles from './FriendActivity.module.scss';

function FriendActivity({ toggleOpen, switches }) {
  const { t } = useTranslation();
  const theme = useTheme();

  const skeletonOne = switches === 'dark' ? styles.skeleton_one_dark : styles.skeleton_one_light;
  const skeleton = switches === 'dark' ? styles.skeleton_dark : styles.skeleton_light;

  return (
    <Paper sx={{ color: theme.palette.background.paper }} className={styles.friend}>
      <div className={styles.wrapper}>
        <div className={styles.friend_header}>
          <Typography
            sx={{
              color: theme.palette.text.secondary,
              fontSize: '20px',
              marginTop: '20px',
            }}
            className={styles.title_friend}
          >
            {t('friend.friendTitle')}
          </Typography>
          <div className={styles.icons_friend}>
            <Button sx={{ borderRadius: '50px' }}>
              {switches === 'dark' ? (
                <PiUserCirclePlusThin className={styles.icon_friend} />
              ) : (
                <PiUserCirclePlusThin style={{ color: 'black' }} className={styles.icon_friend} />
              )}
            </Button>
            <Button sx={{ borderRadius: '50px' }} onClick={toggleOpen}>
              {switches === 'dark' ? (
                <IoMdClose className={styles.icon_close} />
              ) : (
                <IoMdClose style={{ color: 'black' }} className={styles.icon_close} />
              )}
            </Button>
          </div>
        </div>
        <div>
          <Typography
            sx={{
              color: theme.palette.text.secondary,
              fontSize: '18px',
              margin: '40px 0',
            }}
          >
            {t('friend.friendDescr')}
          </Typography>
          <div className={styles.avatar_skeleton}>
            <div className={styles.box}>
              {switches === 'dark' ? (
                <RxAvatar className={styles.avatar} />
              ) : (
                <RxAvatar style={{ color: 'black' }} className={styles.avatar} />
              )}
              <Box>
                <Skeleton className={skeletonOne} />
                <Skeleton className={skeleton} animation="wave" />
                <Skeleton className={skeleton} animation={false} />
              </Box>
            </div>
            <div className={styles.box}>
              {switches === 'dark' ? (
                <RxAvatar className={styles.avatar} />
              ) : (
                <RxAvatar style={{ color: 'black' }} className={styles.avatar} />
              )}
              <Box>
                <Skeleton className={skeletonOne} />
                <Skeleton className={skeleton} animation="wave" />
                <Skeleton className={skeleton} animation={false} />
              </Box>
            </div>
            <div className={styles.box}>
              {switches === 'dark' ? (
                <RxAvatar className={styles.avatar} />
              ) : (
                <RxAvatar style={{ color: 'black' }} className={styles.avatar} />
              )}
              <Box>
                <Skeleton className={skeletonOne} />
                <Skeleton className={skeleton} animation="wave" />
                <Skeleton className={skeleton} animation={false} />
              </Box>
            </div>
          </div>
          <Typography sx={{
            color: theme.palette.text.secondary,
            fontSize: '18px',
            margin: '40px 0',
          }}
          >
            {t('friend.friendSett')}
          </Typography>
          <Button sx={{
            display: 'grid',
            paddingTop: '10px',
            background: theme.palette.action.hover,
            borderRadius: '40px',
            width: '233px',
            height: '62px',
            fontSize: '18px',
            margin: '0 auto',
          }}
          >
            <Typography sx={{ color: theme.palette.text.primary }}>
              {t('friend.friendButton')}
            </Typography>
          </Button>
        </div>
      </div>
    </Paper>
  );
}

export default FriendActivity;

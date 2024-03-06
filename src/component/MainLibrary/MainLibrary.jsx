/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import { useTheme } from '@emotion/react';
import { useTranslation } from 'react-i18next';
import HeaderMain from '../HeaderMain/HeaderMain';
import styles from './MainLibrary.module.scss';

function MainLibrary({
  switches, handleSwitchChange, playlists, open, toggleOpen,
}) {
  const { t } = useTranslation();

  const main = switches === 'dark' ? styles.main_dark : styles.main_light;
  const theme = useTheme();
  return (
    <div className={main}>
      <div className={styles.wrapper}>
        <HeaderMain
          switches={switches}
          handleSwitchChange={handleSwitchChange}
          open={open}
          toggleOpen={toggleOpen}
        />
        <div className={styles.title_playlists}>
          <Typography sx={{ color: theme.palette.text.primary, fontSize: '30px', margin: '20px 0 30px 0' }} variant="h1">
            {t('playlist.playlist')}
          </Typography>
        </div>
        <div className={styles.playlists}>
          <div className={styles.items_playlist}>
            <Link to="/liked_songs" className={styles.liked_songs}>
              <p className={styles.liked_song}>
                Adekunle Gold
                {' '}
                <span>Here For Ya,</span>
                {' '}
                Julia Wolf
                {' '}
                <span>Pillow, </span>
                Claud
                {' '}
                <span>If I Were You, </span>
                {' '}
                The Wldlfe
                {' '}
                <span>The Other...</span>
                {' '}
                Yoke Lore
                {' '}
                <span>Goodpain, </span>
                Ayra Starr
                {' '}
                <span>Memories...</span>
              </p>
              <p className={styles.liked_songs_title}>{t('likedSongs.likedSongs')}</p>
              <p className={styles.liked_songs_number}>{t('playlist.numberLikedSong')}</p>
            </Link>
            {playlists.map((item) => (
              <Link to={`/your_library/${encodeURIComponent(item.title)}`} className={styles.item_playlist}>
                <img className={styles.img_playlist} src={item.img} alt={item.id} key={item.id} />
                <Typography sx={{ color: theme.palette.text.primary, fontSize: '20px', margin: '0 29px 10px 29px' }} className={styles.title_playlist}>
                  {t(`playlist.${item.title}`)}
                </Typography>
                <Typography sx={{ color: theme.palette.text.secondary, fontSize: '18px', margin: '0 29px 20px 29px' }}>{t(`playlist.${item.description}`)}</Typography>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainLibrary;

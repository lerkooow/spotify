/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { Typography } from '@mui/material';
import { useTheme } from '@emotion/react';
import { useTranslation } from 'react-i18next';
import HeaderMainSearch from '../HeaderMainSearch/HeaderMainSearch';

import artist1 from '../../img/ab6761610000e5ebdb68d678df6d89bf8a55d052.jpeg';
import artist2 from '../../img/ab67706f000000021d5bbda37b600608832909bc.jpeg';
import slide1 from '../../img/Frame 46.png';
import slide2 from '../../img/Frame 47.png';
// import slide3 from "../../img/Frame 48.png";
// import slide4 from "../../img/Frame 49.png";
import styles from './MainSearch.module.scss';

function MainSearch({
  switches, handleSwitchChange, navigation, browseAll, open, toggleOpen,
}) {
  const main = switches === 'dark' ? styles.main_dark : styles.main_light;
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <div className={main}>
      <div className={styles.wrapper}>
        <HeaderMainSearch
          switches={switches}
          handleSwitchChange={handleSwitchChange}
          navigation={navigation}
          open={open}
          toggleOpen={toggleOpen}
        />
        <Typography
          sx={{ color: theme.palette.text.primary, fontSize: '30px', margin: '20px 0 30px 0' }}
          variant="h1"
        >
          {t('searches.recentSearches')}
        </Typography>
        <div className={styles.items_artist}>
          <div className={styles.card_artist}>
            {switches === 'dark' ? (
              <IoCloseCircleOutline style={{
                color: 'white', width: '32px', height: '32px', marginLeft: '150px',
              }}
              />
            ) : (
              <IoCloseCircleOutline style={{
                color: 'black', width: '32px', height: '32px', marginLeft: '150px',
              }}
              />
            )}
            <img src={artist1} alt="The Chainsmokers" className={styles.artist_img} />
            <Typography sx={{ color: theme.palette.text.primary, fontSize: '20px' }}>The Chainsmokers</Typography>
            <Typography sx={{ color: theme.palette.text.secondary, fontSize: '18px' }} className={styles.artist_function}>{t('searches.artist')}</Typography>
          </div>
          <div className={styles.card_artist}>
            {switches === 'dark' ? (
              <IoCloseCircleOutline style={{
                color: 'white', width: '32px', height: '32px', marginLeft: '150px',
              }}
              />
            ) : (
              <IoCloseCircleOutline style={{
                color: 'black', width: '32px', height: '32px', marginLeft: '150px',
              }}
              />
            )}
            <img src={artist2} alt="Ed Sheeran" className={styles.artist_img} />
            <Typography sx={{ color: theme.palette.text.primary, fontSize: '20px' }}>Ed Sheeran</Typography>
            <Typography sx={{ color: theme.palette.text.secondary, fontSize: '18px' }}>{t('searches.artist')}</Typography>
          </div>
        </div>
        <Typography
          sx={{ color: theme.palette.text.primary, fontSize: '32px', margin: '55px 0 20px 0' }}
          variant="h2"
        >
          {t('searches.yourTopGenres')}
        </Typography>
        <div className={styles.slider}>
          <img className={styles.img_slider} src={slide1} alt="slide1" />
          <img className={styles.img_slider} src={slide2} alt="slide2" />
          {/* <img src={slide3} alt="slide3"/>
                    <img src={slide4} alt="slide4"/> */}
        </div>
        <Typography
          sx={{ color: theme.palette.text.primary, fontSize: '32px', margin: '55px 0 20px 0' }}
          variant="h2"
        >
          {t('searches.browseAll')}
        </Typography>
        <div className={styles.browse_items}>
          {browseAll.map((item) => (
            <img className={styles.browse_img} src={item.img} key={item.id} alt={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainSearch;

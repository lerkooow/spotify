/* eslint-disable react/prop-types */
import React from 'react';
import { FaPlayCircle, FaSortDown } from 'react-icons/fa';
import { CiHeart, CiSaveDown1, CiSearch } from 'react-icons/ci';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { HiOutlineClock } from 'react-icons/hi2';
import { Typography } from '@mui/material';
import { useTheme } from '@emotion/react';
import { useTranslation } from 'react-i18next';
import elipse from '../../img/Ellipse 19.png';
import avatarLiked from '../../img/Screenshot 2022-06-05 at 12.21 1.png';
import likedImg from '../../img/Screenshot 2022-06-04 at 20 1.png';
import HeaderMain from '../HeaderMain/HeaderMain';
import styles from './MainLiked.module.scss';
import { itemsMusic } from '../Music/Music';

function MainLiked({
  switches, handleSwitchChange, open, toggleOpen,
}) {
  const likedMain = switches === 'dark' ? styles.liked_main_dark : styles.liked_main_light;
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <div className={likedMain}>
      <div className={styles.wrapper}>
        <HeaderMain
          switches={switches}
          handleSwitchChange={handleSwitchChange}
          open={open}
          toggleOpen={toggleOpen}
        />
        <div className={styles.liked_song}>
          <img className={styles.liked_img} src={likedImg} alt="liked_img" />
          <div className={styles.liked_info}>
            <Typography sx={{ color: theme.palette.text.primary, fontSize: '16px', width: '85px' }}>{t('likedSongs.public')}</Typography>
            <Typography sx={{ color: theme.palette.text.primary, fontSize: '70px', marginBottom: '10px' }}>{t('likedSongs.likedSongs')}</Typography>
            <div className={styles.avatar_liked}>
              <img className={styles.img_liked} src={avatarLiked} alt="avatar-liked" />
              <Typography
                sx={{ color: theme.palette.text.primary }}
                className={styles.name_liked}
              >
                lerkooow
              </Typography>
              <img className={styles.img_elipse} src={elipse} alt="elipse" />
              <Typography
                sx={{ color: theme.palette.text.primary }}
                className={styles.liked_number}
              >
                {t('likedSongs.number')}
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.items_music}>
        <div className={styles.wrapper}>
          <div className={styles.item_music_panel}>
            <div className={styles.menu_icons}>
              <FaPlayCircle className={styles.play} />
              {switches === 'dark' ? (
                <>
                  <CiHeart style={{ color: 'white', height: '52px', width: '52px' }} />
                  <CiSaveDown1 style={{ color: 'white', height: '52px', width: '52px' }} />
                  <HiOutlineDotsHorizontal style={{ color: 'white', height: '44px', width: '44px' }} />
                </>
              ) : (
                <>
                  <CiHeart style={{ color: 'black', height: '52px', width: '52px' }} />
                  <CiSaveDown1 style={{ color: 'black', height: '52px', width: '52px' }} />
                  <HiOutlineDotsHorizontal style={{ color: 'black', height: '44px', width: '44px' }} />
                </>
              )}
            </div>
            <div className={styles.menu_search}>
              {switches === 'dark' ? (
                <>
                  <CiSearch style={{
                    color: 'white', height: '23px', width: '23px', marginRight: '32px',
                  }}
                  />
                  <p className={styles.select_liked_dark}>{t('likedSongs.sort')}</p>
                  <FaSortDown style={{
                    color: 'white',
                  }}
                  />
                </>
              ) : (
                <>
                  <CiSearch style={{
                    color: 'black', height: '23px', width: '23px', marginRight: '32px',
                  }}
                  />
                  <p className={styles.select_liked_light}>{t('likedSongs.sort')}</p>
                  <FaSortDown style={{
                    color: 'black',
                  }}
                  />
                </>
              )}
            </div>
          </div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.title_items_music}>
            <Typography
              sx={{ color: theme.palette.text.primary, width: '309px', fontSize: '16px' }}
            >
              {t('likedSongs.title')}
            </Typography>
            <Typography
              sx={{ color: theme.palette.text.primary, width: '207px', fontSize: '16px' }}
            >
              {t('likedSongs.album')}
            </Typography>
            <Typography
              sx={{ color: theme.palette.text.primary, fontSize: '16px' }}
            >
              {t('likedSongs.date')}
            </Typography>
            {switches === 'dark' ? (
              <HiOutlineClock style={{ color: '#B3B3B3', width: '38.31px', height: '22px' }} className={styles.clock} />
            ) : (
              <HiOutlineClock style={{ color: 'black', width: '38.31px', height: '22px' }} className={styles.clock} />
            )}
          </div>
          <hr />
          {itemsMusic.map((item) => (
            <div className={styles.item_music}>
              <div className={styles.item_music_sing}>
                <img className={styles.item_music_img} src={item.img} alt={item.title} />
                <div className={styles.title_name}>
                  <Typography
                    sx={{ color: theme.palette.text.primary, fontSize: '20px' }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{ color: theme.palette.text.secondary, fontSize: '18px' }}
                  >
                    {item.name}
                  </Typography>
                </div>
              </div>
              <Typography
                sx={{ color: theme.palette.text.secondary, fontSize: '18px', width: '207px' }}
              >
                {item.album}
              </Typography>
              <Typography
                sx={{ color: theme.palette.text.secondary, width: '101.14px', textAlign: 'center' }}
                className={styles.item_music_date}
              >
                {item.date_added}
              </Typography>
              <Typography
                sx={{ color: theme.palette.text.primary, fontSize: '20px' }}
              >
                {item.time}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainLiked;

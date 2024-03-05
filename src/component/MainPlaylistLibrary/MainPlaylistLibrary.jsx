/* eslint-disable react/prop-types */
import React from 'react';
import { FaPlayCircle, FaSortDown } from 'react-icons/fa';
import { CiHeart, CiSaveDown1, CiSearch } from 'react-icons/ci';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { HiOutlineClock } from 'react-icons/hi2';
import { IoMdHeart, IoMdHeartEmpty } from 'react-icons/io';
import { itemsMusic } from '../Music/Music';
import elipse from '../../img/Ellipse 19.png';
import avatarLiked from '../../img/Screenshot 2022-06-05 at 12.21 1.png';
import HeaderMain from '../HeaderMain/HeaderMain';
import styles from './MainPlaylistLibrary.module.scss';

const getBackgroundColor = (title) => {
  switch (title) {
    case 'Happy Hits!':
      return '#6EA6EA';
    case 'Anime Lofi & Ch...':
      return '#488599';
    case 'Afro “Select” Vi...':
      return '#D4497F';
    case 'Instrumental St...':
      return '#879DB4';
    case 'Pop Mix':
      return '#A34284';
    case 'Chill Mix':
      return '#DEF628';
    default:
      return '#604EC1';
  }
};

function MainPlaylistLibrary({ title, playlists }) {
  const backgroundColor = getBackgroundColor(title);
  return (
    <div className={styles.liked_main} style={{ background: `linear-gradient(${backgroundColor}, #000)` }}>
      <div className={styles.wrapper}>
        <HeaderMain />
        <div className={styles.liked_song}>
          {playlists.map((item) => (
            item.title === title ? (
              <img className={styles.liked_img} src={item.img} alt="liked_img" />
            ) : null
          ))}
          <div className={styles.liked_info}>
            <p className={styles.liked_public}>PUBLIC PLAYLIST</p>
            <p className={styles.liked_text}>{title}</p>
            {playlists.map((item) => (
              item.title === title ? (
                <p className={styles.liked_description}>{item.description}</p>
              ) : null
            ))}
            <div className={styles.avatar_liked}>
              <img className={styles.img_liked} src={avatarLiked} alt="avatar-liked" />
              <p className={styles.name_liked}>lerkooow</p>
              <img className={styles.img_elipse} src={elipse} alt="elipse" />
              <p className={styles.liked_number}>34 songs</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.items_music}>
        <div className={styles.wrapper}>
          <div className={styles.item_music_panel}>
            <div className={styles.menu_icons}>
              <FaPlayCircle className={styles.play} />
              <CiHeart className={styles.heart} />
              <CiSaveDown1 className={styles.save_down} />
              <HiOutlineDotsHorizontal className={styles.dots} />
            </div>
            <div className={styles.menu_search}>
              <CiSearch className={styles.search} />
              <p className={styles.select_liked}>Custom order</p>
              <FaSortDown className={styles.sort_down} />
            </div>
          </div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.title_items_music}>
            <p className={styles.at_title}># TITLE</p>
            <p className={styles.music_album}>ALBUM</p>
            <p className={styles.music_date}>DATE ADDED</p>
            <HiOutlineClock className={styles.clock} />
          </div>
          <hr />
          {itemsMusic.map((item) => (
            <div className={styles.item_music}>
              <div className={styles.item_music_sing}>
                <img className={styles.item_music_img} src={item.img} alt={item.title} />
                <div className={styles.title_name}>
                  <p className={styles.item_music_title}>{item.title}</p>
                  <p className={styles.item_music_name}>{item.name}</p>
                </div>
              </div>
              <p className={styles.item_music_album}>{item.album}</p>
              <p className={styles.item_music_date}>{item.date_added}</p>
              <p className={styles.item_music_time}>
                {item.liked ? <IoMdHeart style={{ color: '#63CF6C' }} /> : <IoMdHeartEmpty />}
                {item.time}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainPlaylistLibrary;

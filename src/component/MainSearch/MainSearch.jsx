/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
import { IoCloseCircleOutline } from 'react-icons/io5';
import HeaderMainSearch from '../HeaderMainSearch/HeaderMainSearch';

import artist1 from '../../img/ab6761610000e5ebdb68d678df6d89bf8a55d052.jpeg';
import artist2 from '../../img/ab67706f000000021d5bbda37b600608832909bc.jpeg';
import slide1 from '../../img/Frame 46.png';
import slide2 from '../../img/Frame 47.png';
// import slide3 from "../../img/Frame 48.png";
// import slide4 from "../../img/Frame 49.png";

import styles from './MainSearch.module.scss';

function MainSearch({
  switches, handleSwitchChange, navigation, browseAll,
}) {
  return (
    <div className={styles.main_dark}>
      <div className={styles.wrapper}>
        <HeaderMainSearch switches={switches} handleSwitchChange={handleSwitchChange} navigation={navigation} />
        <div className={styles.title_searches}>
          <h1>Recent searches</h1>
        </div>
        <div className={styles.items_artist}>
          <div className={styles.card_artist}>
            <IoCloseCircleOutline className={styles.close_artist} />
            <img src={artist1} alt="The Chainsmokers" className={styles.artist_img} />
            <p className={styles.artist_name}>The Chainsmokers</p>
            <p className={styles.artist_function}>Artist</p>
          </div>
          <div className={styles.card_artist}>
            <IoCloseCircleOutline className={styles.close_artist} />
            <img src={artist2} alt="Ed Sheeran" className={styles.artist_img} />
            <p className={styles.artist_name}>Ed Sheeran</p>
            <p className={styles.artist_function}>Artist</p>
          </div>
        </div>
        <div className={styles.title_genres}>
          <h2>Your top genres</h2>
        </div>
        <div className={styles.slider}>
          <img className={styles.img_slider} src={slide1} alt="slide1" />
          <img className={styles.img_slider} src={slide2} alt="slide2" />
          {/* <img src={slide3} alt="slide3"/>
                    <img src={slide4} alt="slide4"/> */}
        </div>
        <div className={styles.title_genres}>
          <h2>Browse all</h2>
        </div>
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

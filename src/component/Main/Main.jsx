/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ItemsCard from '../ItemsCard/ItemsCard';
import HeaderMain from '../HeaderMain/HeaderMain';

import styles from './Main.module.scss';

function Main({
  switches, handleSwitchChange, mix, open, toggleOpen,
}) {
  const { t } = useTranslation();

  return (
    <div className={styles.main_dark}>
      <div className={styles.wrapper}>
        <HeaderMain
          switches={switches}
          handleSwitchChange={handleSwitchChange}
          open={open}
          toggleOpen={toggleOpen}
        />
        <div className={styles.title_greeting}>
          <h1>{t('greeting.goodAfternoon')}</h1>
        </div>
        <div className={styles.items_mix}>
          {mix.map((item) => (
            <Link
              to={`/mix/${encodeURIComponent(item.title)}`}
              key={item.id}
              className={styles.item_mix}
            >
              <img src={item.img} className={styles.img_mix} alt="img_mix" />
              <p className={styles.title_mix}>{t(`mix.${item.title}`)}</p>
            </Link>
          ))}
        </div>
        <ItemsCard mix={mix} title="Your top mixes" open={open} />
        <ItemsCard mix={mix} title="Made for you" open={open} />
        <ItemsCard mix={mix} title="Recently played" open={open} />
        <ItemsCard mix={mix} title="Jump back in" open={open} />
        <ItemsCard mix={mix} title="Uniquely yours" open={open} />
        <ItemsCard mix={mix} title="Just the hits" open={open} />
      </div>
    </div>
  );
}

export default Main;

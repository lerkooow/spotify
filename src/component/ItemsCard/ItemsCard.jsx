/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';
import { useTheme } from '@emotion/react';
import styles from './ItemsCard.module.scss';

// eslint-disable-next-line react/prop-types
function ItemsCard({ mix, title, open }) {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <>
      <div className={styles.top_mix}>
        <h2 className={styles.title_top_mix}>{t(`mix.${title}`)}</h2>
        <Typography sx={{ color: theme.palette.text.secondary, fontSize: '16px' }}>{t('mix.SeeAll')}</Typography>
      </div>
      <div className={styles.items_top_mix}>
        {open
          ? (
            mix.slice(0, 4).map((item) => (
              <Link
                to={`/mix/${encodeURIComponent(item.title)}`}
                key={item.id}
                className={styles.item_top_mix}
              >
                <img src={item.img} className={styles.img_top_mix} alt="img_top_mix" />
                <p className={styles.title_top_mix}>{t(`mix.${item.title}`)}</p>
                <p className={styles.description_top_mix}>{item.description}</p>
              </Link>
            ))
          )
          : (
            mix.slice(0, 5).map((item) => (
              <Link
                to={`/mix/${encodeURIComponent(item.title)}`}
                key={item.id}
                className={styles.item_top_mix}
              >
                <img src={item.img} className={styles.img_top_mix} alt="img_top_mix" />
                <p className={styles.title_top_mix}>{t(`mix.${item.title}`)}</p>
                <p className={styles.description_top_mix}>{item.description}</p>
              </Link>
            ))
          )}
      </div>
    </>
  );
}

export default ItemsCard;

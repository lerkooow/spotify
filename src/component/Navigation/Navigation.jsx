/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MdOutlineLanguage } from 'react-icons/md';
import {
  Paper, Typography, useTheme,
} from '@mui/material'; // Import useTheme
import styles from './Navigation.module.scss';

function Navigation({ top, navigation, switches }) {
  const { t, i18n } = useTranslation();
  const theme = useTheme();

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem('language', language);
  };

  return (
    <Paper sx={{ color: theme.palette.background.secondary }}>
      <nav>
        <ul>
          {navigation.map((item) => (
            <div className={styles.icon_items} key={item.title}>
              <div className={styles.icon_item}>
                {switches === 'dark' ? item.icon_dark : item.icon_light}
              </div>
              <Link to={item.routes} className={styles.nav_item} key={item.title}>
                <Typography sx={{ color: theme.palette.text.primary }}>
                  {t(`navigation.${item.title.toLowerCase()}`)}
                </Typography>
              </Link>
            </div>
          ))}
        </ul>
        <hr className={styles.hr} />
      </nav>
      <div>
        {top.map((item) => (
          <Typography
            className={styles.top}
            sx={{
              color: theme.palette.text.secondary,
              margin: '20px 30px 18px 30px',
            }}
          >
            {t(`top.${item}`)}
          </Typography>
        ))}
      </div>
      <div className={styles.language}>
        {switches === 'dark' ? (
          <MdOutlineLanguage style={{ color: 'white', width: '24px', height: '24px' }} />
        ) : (
          <MdOutlineLanguage style={{ color: 'black', width: '24px', height: '24px' }} />
        )}
        <select className={styles.select_lang} onChange={(e) => changeLanguage(e.target.value)}>
          <option value="en" selected={i18n.language === 'en'}>
            English
          </option>
          <option value="ru" selected={i18n.language === 'ru'}>
            Русский
          </option>
        </select>
      </div>
    </Paper>
  );
}

export default Navigation;

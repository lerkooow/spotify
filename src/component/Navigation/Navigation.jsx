/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MdOutlineLanguage } from 'react-icons/md';
import styles from './Navigation.module.scss';

function Navigation({ top, navigation }) {
  const { t, i18n } = useTranslation();

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
    <div className={styles.nav}>
      <nav>
        <ul>
          {navigation.map((item) => (
            <div className={styles.icon_items} key={item.title}>
              <div className={styles.icon_item}>
                {item.icon_dark}
              </div>
              <Link to={item.routes} className={styles.nav_item} key={item.title}>
                {t(`navigation.${item.title.toLowerCase()}`)}
              </Link>
            </div>
          ))}
        </ul>
        <hr className={styles.hr} />
      </nav>
      <div>
        {top.map((item) => (
          <p className={styles.top}>{t(`top.${item}`)}</p>
        ))}
      </div>
      <div className={styles.language}>
        <MdOutlineLanguage className={styles.icon_lang} />
        <select className={styles.select_lang} onChange={(e) => changeLanguage(e.target.value)}>
          <option value="en" selected={i18n.language === 'en'}>
            English
          </option>
          <option value="ru" selected={i18n.language === 'ru'}>
            Русский
          </option>
        </select>
      </div>
    </div>
  );
}

export default Navigation;

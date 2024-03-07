/* eslint-disable react/prop-types */
import React from 'react';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Button, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@emotion/react';
import styles from './HeaderMainSearch.module.scss';
import CustomizedSwitches from '../Switch/Switch';
import SearchMUI from '../SearchMUI/SearchMUI';

function HeaderMainSearch({
  switches, handleSwitchChange, toggleOpen, open,
}) {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <div>
      <header>
        <div className={styles.auth_dark}>
          <div className={styles.arrows}>
            {switches === 'dark' ? (
              <Link to="/" className={styles.arrow}>
                <IoIosArrowDropleftCircle style={{ color: 'white', width: '40px', height: '40px' }} />
                <IoIosArrowDroprightCircle style={{ color: 'white', width: '40px', height: '40px' }} />
              </Link>
            ) : (
              <Link to="/" className={styles.arrow}>
                <IoIosArrowDropleftCircle style={{ color: 'black', width: '40px', height: '40px' }} />
                <IoIosArrowDroprightCircle style={{ color: 'black', width: '40px', height: '40px' }} />
              </Link>
            )}
            <SearchMUI />
          </div>
          <div className={styles.auth_panel}>
            <CustomizedSwitches switches={switches} handleSwitchChange={handleSwitchChange} />
            <Link to="/signup" className={styles.signup}>
              <Typography style={{ color: theme.palette.text.primary }}>
                {t('signup.SignUp')}
              </Typography>
            </Link>
            <Link to="/login" className={styles.login}>
              {t('login.LogIn')}
            </Link>
            {open ? null : (
              <Button sx={{ borderRadius: '50px' }}>
                <RxHamburgerMenu
                  style={{ color: switches === 'dark' ? 'white' : 'black', width: '40px', height: '40px' }}
                  onClick={toggleOpen}
                />
              </Button>
            )}
          </div>
        </div>
      </header>
    </div>
  );
}

export default HeaderMainSearch;

/* eslint-disable react/prop-types */
import React from 'react';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';

import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Button } from '@mui/material';
import styles from './HeaderMain.module.scss';
import CustomizedSwitches from '../Switch/Switch';

function HeaderMain({
  switches, handleSwitchChange, open, toggleOpen,
}) {
  const { t } = useTranslation();

  return (
    <div>
      <header>
        <div className={styles.auth_dark}>
          <Link to="/" className={styles.arrows}>
            <IoIosArrowDropleftCircle className={styles.arrow} />
            <IoIosArrowDroprightCircle className={styles.arrow} />
          </Link>
          <div className={styles.auth_panel}>
            <CustomizedSwitches switches={switches} handleSwitchChange={handleSwitchChange} />
            <Link to="/signup" className={styles.signup}>
              {t('signup.SignUp')}
            </Link>
            <Link to="/login" className={styles.login}>
              {t('login.LogIn')}
            </Link>
            {open ? null : (
              <Button sx={{ borderRadius: '50px' }}>
                <RxHamburgerMenu style={{ color: 'white', width: '40px', height: '40px' }} onClick={toggleOpen} />
              </Button>
            )}
          </div>
        </div>
      </header>
    </div>
  );
}

export default HeaderMain;

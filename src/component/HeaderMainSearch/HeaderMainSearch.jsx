import React from 'react';
import styles from "../HeaderMainSearch/HeaderMainSearch.module.scss";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import CustomizedSwitches from '../Switch/Switch';
import SearchMUI from "../SearchMUI/SearchMUI"
import { Link } from 'react-router-dom';

const HeaderMainSearch = ({ switches, handleSwitchChange }) => {
    return (
        <div>
            <header>
                <div className={styles.auth_dark}>
                    <Link to="/" className={styles.arrows}>
                        <IoIosArrowDropleftCircle className={styles.arrow} />
                        <IoIosArrowDroprightCircle className={styles.arrow} />
                        <SearchMUI />
                    </Link>
                    <div className={styles.auth_panel}>
                        <CustomizedSwitches switches={switches} handleSwitchChange={handleSwitchChange} />
                        <p className={styles.signup}>Sign Up</p>
                        <p className={styles.login}>Log In</p>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default HeaderMainSearch;

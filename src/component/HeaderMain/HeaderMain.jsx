import CustomizedSwitches from '../Switch/Switch';

import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";

import styles from "../HeaderMain/HeaderMain.module.scss";
import { Link } from 'react-router-dom';

const HeaderMain = ({ switches, handleSwitchChange }) => {
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
                            Sign Up
                        </Link>
                        <Link to="/login" className={styles.login}>
                            Log In
                        </Link>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default HeaderMain;

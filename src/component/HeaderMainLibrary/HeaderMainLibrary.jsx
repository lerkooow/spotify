import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";
import styles from "../HeaderMainLibrary/HeaderMainLibrary.module.scss";
import CustomizedSwitches from "../Switch/Switch";
import { Link } from "react-router-dom";

const HeaderMainLibrary = ({ switches, handleSwitchChange }) => {
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
                        <p className={styles.signup}>Sign Up</p>
                        <p className={styles.login}>Log In</p>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default HeaderMainLibrary
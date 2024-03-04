import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { MdOutlineLanguage } from "react-icons/md";

import styles from "../Navigation/Navigation.module.scss";

const Navigation = ({ top, navigation, switches }) => {

    const { t, i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    }

    return (
        <div className={styles.nav} >
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
                    <p className={styles.top}>{item}</p>
                ))}
            </div>
            <div className={styles.language}>
                {/* {switches === "dark" ? ( */}
                <MdOutlineLanguage className={styles.icon_lang} />
                {/* ) : (
                    <MdOutlineLanguage className={styles.icon_lang} style={{ color: "black" }} />
                )} */}
                <select className={styles.select_lang} onChange={(e) => changeLanguage(e.target.value)}>
                    <option value="en">
                        English
                    </option>
                    <option value="ru">
                        Русский
                    </option>
                </select>
            </div>
        </div>
    )
}

export default Navigation;

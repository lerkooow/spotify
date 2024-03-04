import ItemsCard from '../ItemsCard/ItemsCard';
import HeaderMain from '../HeaderMain/HeaderMain';

import styles from "../Main/Main.module.scss";
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Main = ({ switches, handleSwitchChange, mix }) => {
    // eslint-disable-next-line no-unused-vars
    const [data, setData] = useState({
        title: "",
        description: ""
    });

    const handleItemClick = (item) => {
        setData({
            title: item.title,
            description: item.description
        });
    };
    return (
        <div className={styles.main_dark}>
            <div className={styles.wrapper}>
                <HeaderMain switches={switches} handleSwitchChange={handleSwitchChange} />
                <div className={styles.title_greeting}>
                    <h1>Good afternoon</h1>
                </div>
                <div className={styles.items_mix}>
                    {mix.map((item) => (
                        <Link
                            to={`/playlist/${encodeURIComponent(item.title)}`}
                            key={item.id}
                            className={styles.item_mix}
                            onClick={() => handleItemClick(item)}
                        >
                            <img src={item.img} className={styles.img_mix} alt="img_mix" />
                            <p className={styles.title_mix}>{item.title}</p>
                        </Link>
                    ))}
                </div>
                <ItemsCard mix={mix} title="Your top mixes" />
                <ItemsCard mix={mix} title="Made for you" />
                <ItemsCard mix={mix} title="Recently played" />
                <ItemsCard mix={mix} title="Jump back in" />
                <ItemsCard mix={mix} title="Uniquely yours" />
                <ItemsCard mix={mix} title="Just the hits" />
            </div>
        </div>
    )
}

export default Main;
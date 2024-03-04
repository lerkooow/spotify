import { useState } from "react";
import styles from "../ItemsCard/ItemsCard.module.scss";
import { Link } from "react-router-dom";

const ItemsCard = ({ mix, title }) => {
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
        <>
            <div className={styles.top_mix}>
                <h2 className={styles.title_top_mix}>{title}</h2>
                <p className={styles.all_top_mix}>SEE ALL</p>
            </div>
            <div className={styles.items_top_mix}>
                {mix.slice(0, 4).map((item) => (
                    <Link
                        to={`/playlist/${encodeURIComponent(item.title)}`}
                        key={item.id}
                        className={styles.item_top_mix}
                        onClick={() => handleItemClick(item)}
                    >
                        <img src={item.img} className={styles.img_top_mix} alt="img_top_mix" />
                        <p className={styles.title_top_mix}>{item.title}</p>
                        <p className={styles.description_top_mix}>{item.description}</p>
                    </Link>
                ))}
            </div>
        </>
    );
};

export default ItemsCard;

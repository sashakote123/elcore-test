import { useState } from 'react';
import styles from './styles.module.scss'

const CategoriesBtns = (props) => {

    const [isActive, setIsActive] = useState(0)


    const buttons = [
        {
            label: 'Все новости и статьи'
        },
        {
            label: 'Новости'
        },
        {
            label: 'Статьи'
        },
    ]

    const handleClick = (index) => {
        setIsActive(index)
        props.filterFunc(index)
    }

    return (
        <nav className={styles.categoriesBtns}>
            {buttons.map((item, index) => {
                return (
                    <button
                        onClick={() => handleClick(index)}
                        key={index}
                        className={`${styles.btnsItem} ${isActive === index ? styles.active : ''}`}>
                        {item.label}
                    </button>
                )
            })}
        </nav>
    );
}

export default CategoriesBtns;
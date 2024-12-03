import styles from './styles.module.scss'
import img1 from './../../img/star.svg'
import img2 from './../../img/cart.svg'
import img3 from './../../img/tg.svg'
import img4 from './../../img/zen.svg'
import img5 from './../../img/ut.svg'
import img6 from './../../img/vk.svg'
import img7 from './../../img/logo.svg'
import img8 from './../../img/burger.svg'
import { useEffect, useState } from 'react'
import LeftMenu from '../leftMenu/LeftMenu'

const Header = () => {

    const [isShow, setIsShow] = useState(false)

    const handleShow = () => {
        isShow ? setIsShow(false) : setIsShow(true)
    }

    useEffect(() => {
        if (isShow) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    })
    return (
        <>
            {isShow ? <LeftMenu close={handleShow} /> : <></>}
            <header>

                <div className={styles.wrapper}>
                    <div className={styles.headerSocials}>
                        <ul className={styles.socialsFirstItem}>
                            <li><a href="#!"><img src={img3} alt="tg" /></a></li>
                            <li><a href="#!"><img src={img4} alt="zn" /></a></li>
                            <li><a href="#!"><img src={img5} alt="yt" /></a></li>
                            <li><a href="#!"><img src={img6} alt="vk" /></a></li>
                        </ul>
                        <div className={styles.socialsSecondItem}>
                            <ul className={styles.itemLinks}>
                                <li><a href="#!">Форум</a></li>
                                <li><a href="#!">Поиск</a></li>
                                <li><a href="#!">Контакты</a></li>
                            </ul>
                            <div className={styles.itemBtns}>
                                <img src={img1} alt="star" />
                                <img src={img2} alt="cart" />
                            </div>
                            <button className={styles.mainBtb}>Личный кабинет</button>
                        </div>
                    </div>
                </div>
                <div className={styles.navWrapper}>
                    <nav className={styles.navigation}>
                        <img src={img7} alt="logo" />
                        <ul>
                            <li><a href="#!">ElcoreStore</a></li>
                            <li><a href="#!">ElcoreCloud</a></li>
                            <li><a href="#!">ElcoreIDE</a></li>
                            <li><details>
                                <summary>Обучение и ресурсы</summary>
                                <a href="#!">Ссылка куда-нибудь</a>
                            </details></li>
                            <li><a href="#!">Новости и статьи</a></li>
                        </ul>
                        <button onClick={handleShow}>
                            <img src={img8} alt="brgr" />
                        </button>

                    </nav>
                </div>

                <div className={styles.wrapperThin}>
                    <div className={styles.links}>
                        <a href="#!">Главная</a> / <a href="#!">Новости и статьи</a>
                    </div>

                </div>
            </header>
        </>


    );
}

export default Header;
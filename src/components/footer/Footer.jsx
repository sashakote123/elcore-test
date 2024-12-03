import styles from './styles.module.scss'

import img1 from './../../img/logo.svg'
import img2 from './../../img/download.svg'

import img3 from './../../img/tg.svg'
import img4 from './../../img/zen.svg'
import img5 from './../../img/ut.svg'
import img6 from './../../img/vk.svg'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.columns}>
                <ul className={styles.firstColumn}>
                    <li>
                        <a href="#!">
                            <img src={img1} alt="logo" />
                        </a>
                    </li>
                    <li><a href="#!">Платформа для автоматизации <br />
                        ваших процессов</a></li>
                    <li>
                        <a href="#!">
                            <img src={img2} alt="btn" />
                        </a>
                    </li>
                    <li>© ООО «НПО «Фарватер» 2024  </li>

                </ul>
                <div className={styles.leftColumns}>
                    <ul className={styles.columnsItem}>
                        <li><a href="#!">Платформа</a></li>
                        <li><a href="#!">ElcoreStore</a></li>
                        <li><a href="#!">ElcoreCloud</a></li>
                        <li><a href="#!">ElcoreIDE</a></li>

                    </ul>
                    <ul className={styles.columnsItem}>
                        <li><a href="#!">Обучение и ресурсы</a></li>
                        <li><a href="#!">Что такое ElcorePLC</a></li>
                        <li><a href="#!">Документация</a></li>
                        <li><a href="#!">Обучающие материалы</a></li>
                        <li><a href="#!">Примеры использования</a></li>
                        <li><a href="#!">База знаний</a></li>
                    </ul>
                    <ul className={styles.columnsItem}>
                        <li className={styles.link}><a href="#!">Личный кабинет</a></li>
                        <li><a href="#!">Контакты</a></li>
                        <li><a href="#!">Новости и статьи</a></li>
                        <li><a href="#!">Сообщество (Форум)</a></li>
                        <li><a href="#!">Тех поддержка</a></li>
                    </ul>
                </div>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.footerSocials}>
                    <ul className={styles.socialsFirstItem}>
                        <li><a href="#!"><img src={img3} alt="tg" /></a></li>
                        <li><a href="#!"><img src={img4} alt="zn" /></a></li>
                        <li><a href="#!"><img src={img5} alt="yt" /></a></li>
                        <li><a href="#!"><img src={img6} alt="vk" /></a></li>
                    </ul>
                    <ul className={styles.socialsSecondItem}>
                        <li><a href="#!">Политика конфиденциальности</a></li>
                        <li><a href="#!">Карта сайта</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
import styles from './styles.module.scss'
import img from './../../img/burger.svg'

const LeftMenu = (props) => {
    return (
        <>
            <div className={styles.darkScreen}></div>
            <nav className={styles.leftMenu}>
                <button onClick={props.close} className={styles.closeBtn}>
                    <img src={img} alt="close" />
                </button>
                <ul>
                    <li><a href="#!">ElcoreStore</a></li>
                    <li><a href="#!">ElcoreCloud</a></li>
                    <li><a href="#!">ElcoreIDE</a></li>
                    <li><a href="#!">Обучение и ресурсы</a></li>
                    <li><a href="#!">Новости и статьи</a></li>
                </ul>
            </nav>
        </>


    );
}

export default LeftMenu;
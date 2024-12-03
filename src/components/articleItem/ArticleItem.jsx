import styles from './styles.module.css'
import img from './../../img/prewiew.png'



const ArticleItem = (props) => {
    return (
        <li className={styles.articleItem}>
            <img className={styles.itemPrewiew} src={img} alt="prewiew" />
            {props.date ? <div className={styles.itemSubtitle}>
                {props.date} / {props.category}
            </div> : <div className={styles.itemSubtitle}>
                {props.category}
            </div>}

            <h2 className={styles.itemTitle}>{props.title}</h2>
            <h3 className={styles.itemDescription}>{props.description}</h3>
        </li>
    );
}

export default ArticleItem;
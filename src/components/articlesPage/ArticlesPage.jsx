import { useState } from 'react';
import ArticleItem from '../articleItem/ArticleItem';
import CategoriesBtns from '../categotiesBtns/CategoriesBtns';
import styles from './styles.module.scss'

const list = [
    {
        title: 'Новые технологии в сфере автоматизации',
        description: 'Какие инновации помогут улучшить производственные процессы и повысить эффективность работы предприятий',
        date: '12 июля 2024',
        category: 'Новость',
        prewiew: ''
    },
    {
        title: 'Влияние цифровизации',
        description: 'Вызовы и возможности появляются для компаний в результате цифровой трансформации производства',
        date: null,
        category: 'Статья',
        prewiew: ''
    },
    {
        title: 'Устойчивое развитие и ответственность',
        description: 'Какие методы и технологии помогают снизить негативное влияние производства',
        date: '24 апреля 2024',
        category: 'Новость',
        prewiew: ''
    },
    {
        title: 'Новые технологии в сфере автоматизации',
        description: 'Какие инновации помогут улучшить производственные процессы и повысить эффективность работы предприятий',
        date: '12 июля 2024',
        category: 'Новость',
        prewiew: ''
    },
    {
        title: 'Устойчивое развитие и ответственность',
        description: 'Какие методы и технологии помогают снизить негативное влияние производства',
        date: '24 апреля 2024',
        category: 'Новость',
        prewiew: ''
    },
    {
        title: 'Влияние цифровизации',
        description: 'Вызовы и возможности появляются для компаний в результате цифровой трансформации производства',
        date: null,
        category: 'Статья',
        prewiew: ''
    },
    {
        title: 'Влияние цифровизации',
        description: 'Вызовы и возможности появляются для компаний в результате цифровой трансформации производства',
        date: null,
        category: 'Статья',
        prewiew: ''
    },
    {
        title: 'Новые технологии в сфере автоматизации',
        description: 'Какие инновации помогут улучшить производственные процессы и повысить эффективность работы предприятий',
        date: '12 июля 2024',
        category: 'Новость',
        prewiew: ''
    },
    {
        title: 'Устойчивое развитие и ответственность',
        description: 'Какие методы и технологии помогают снизить негативное влияние производства',
        date: '24 апреля 2024',
        category: 'Новость',
        prewiew: ''
    },


]

const ArticlesPage = () => {

    const [articlesList, setArticlesList] = useState(list)

    const filterList = (index) => {
        if (index === 0) {
            setArticlesList(list)
        }
        else if (index === 1) {
            setArticlesList(
                list.filter(item => item.category === 'Новость')
            )
        }
        else if (index === 2) {
            setArticlesList(
                list.filter(item => item.category === 'Статья')
            )
        }
    }

    return (
        <section className={styles.articlesPage}>
            <h1 className={styles.pageTitle}>Новости и статьи</h1>
            <CategoriesBtns filterFunc={filterList} />
            <ul className={styles.articlesList}>
                {articlesList.map((item, index) => {
                    return (
                        <ArticleItem
                            key={index}
                            date={item.date}
                            category={item.category}
                            title={item.title}
                            description={item.description} />

                    )

                })}
            </ul>
        </section>

    );
}

export default ArticlesPage;
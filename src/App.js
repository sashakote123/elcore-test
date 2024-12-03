import './App.css';
import ArticleItem from './components/articleItem/ArticleItem';
import ArticlesPage from './components/articlesPage/ArticlesPage';
import CategoriesBtns from './components/categotiesBtns/CategoriesBtns';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import LeftMenu from './components/leftMenu/LeftMenu';
import './reset.css'


function App() {
  return (
    <div className="App">
      <Header />
      <ArticlesPage />
      <Footer />
      {/* <LeftMenu /> */}
    </div>
  );
}

export default App;

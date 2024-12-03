import './App.css';
import ArticlesPage from './components/articlesPage/ArticlesPage';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import './reset.css'


function App() {
  return (
    <div className="App">
      <Header />
      <ArticlesPage />
      <Footer />
    </div>
  );
}

export default App;

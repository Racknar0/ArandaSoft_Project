import './App.scss';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Main from './components/main/Main';
import MobileMenu from './components/mobileMenu/MobileMenu';
import Provider from './provider/Provider';


function App() {

  return (
    <Provider>
        <Header />
        <Hero />
        <MobileMenu />
        <Main />
        <Footer />
    </Provider>
  );
}

export default App;

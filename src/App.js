import React from 'react';
import Header from './components/header/Header';
import Gnb from './components/nav/Gnb';
import Slider from './components/slider/Slider';
import Vericalcontent from './components/content/Vericalcontent';
import Horizontalcontent from './components/content/Horizontalcontent';
import Footer from './components/footer/Footer';
import 'css/App.css';
function App() {
  return (
    <>
      <Header />
      <Gnb />
      <Slider />
      <h3>스팀에 오신것을 환영합니다.</h3>
      <Vericalcontent />
      <Horizontalcontent />
      {/* <Footer /> */}
    </>
  );
}

export default App;

import React from 'react';
import Comments from '../components/index/Comments';
import Footer from '../components/index/Footer';
import Header from '../components/index/Header';
import Slider from '../components/index/Slider';

const Index = () => {
  return (
    <div>
      <Header />
      <div>
        <Slider />
        <Comments />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
//export dışarı gönder demektir (ihraç)

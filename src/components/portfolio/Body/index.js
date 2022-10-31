import React from 'react';
import './styles.css';
import Page from './Page';
import kod from '../../../static/images/kod.jpg'
import kod2 from '../../../static/images/kod2.jpg'
import kod3 from '../../../static/images/kod3.jpg'



const sayfalar = [
  [
  {
    baslik:"Kod Dünyası",
    tanim:"Enteresan olaylar için takipte kalmaya devam edin...",
    foto:kod
  },
  {
    baslik:"Tüm Dünya Şokta",
    tanim:"Uzaydan gelen saldırı şoka soktu tüm dünyayı şoka soktu..",
    foto:kod2
  },{
    baslik:"React ",
    tanim:"React yazan gençlik işsiz kalmıyor, haydi sizde başlayın.",
    foto:kod3
  },
],[{
    baslik:"Düzlük",
    tanim:"Gençler bugünki yazılarımızda değişiklik yoktur",
    foto:kod
  },{
    baslik:"Devam",
    tanim:"Fark yok bugünki yazılarımızda değişiklik yoktur",
    foto:kod2
  },{
    baslik:"Kitaplık",
    tanim:"Hoşgeldiniz bugünki yazılarımızda değişiklik yoktur",
    foto:kod3
  }],[{
    baslik:"Haber",
    tanim:"Selamlar bugünki yazılarımızda değişiklik yoktur",
    foto:kod
  },{
    baslik:"Fakat",
    tanim:"İlk olarak bugünki yazılarımızda değişiklik yoktur",
    foto:kod2
  },{
    baslik:"Acaba",
    tanim:"İlk bugünki yazılarımızda değişiklik yoktur",
    foto:kod3
  }],
]

const Body = () => {
  return (
    <>
    <div className='all-container'>
        <div className='neler-yaptık'>Neler Yaptık</div>
        <br></br>
        <div className='yazi'>Portfolyomuz da gördüğünüz işlerin detayları için lütfen bizimle iletişime geçiniz. </div>
        <div className='porfolio-body-layout'>
      {sayfalar.map(
        (sayfa)=>{
        return (
          <div className='portfolio-body-container'>
            <div className='page-page'><Page baslik={sayfa[0].baslik} tanim={sayfa[0].tanim} foto={sayfa[0].foto}/></div>
            <div className='page-page'><Page baslik={sayfa[1].baslik} tanim={sayfa[1].tanim} foto={sayfa[1].foto}/></div>
            <div className='page-page'><Page baslik={sayfa[2].baslik} tanim={sayfa[2].tanim} foto={sayfa[2].foto}/></div>
        </div>
        )
      }
      )}
      </div>
    {/* <div className='portfolio-body-container'>
    <div className='page-page'><Page/></div>
    <div className='page-page'><Page/></div>
    <div className='page-page'><Page/></div>
    </div>
    <div className='portfolio-body-container'>
    <div className='page-page'><Page/></div>
    <div className='page-page'><Page/></div>
    <div className='page-page'><Page/></div>
    </div> */}
    </div>
    </>
  );
};

export default Body;

import React from 'react';
import './styles.css';
import Page from './Page';
import kod from '../../../static/images/kod.jpg'
import kod2 from '../../../static/images/kod2.jpg'
import kod3 from '../../../static/images/kod3.jpg'



const sayfalar = [
  [
  {
    baslik:"Başlık",
    tanim:"Merhabalar bugünki yazılarımızda değişiklik yoktur",
    foto:kod
  },
  {
    baslik:"Başlık",
    tanim:"Bugünki yazılarımızda değişiklik yoktur",
    foto:kod2
  },{
    baslik:"Başlık",
    tanim:"Selamlar bugünki yazılarımızda değişiklik yoktur",
    foto:kod3
  },
],[{
    baslik:"Başlık",
    tanim:"Gençler bugünki yazılarımızda değişiklik yoktur",
    foto:kod
  },{
    baslik:"Başlık",
    tanim:"Fark yok bugünki yazılarımızda değişiklik yoktur",
    foto:kod2
  },{
    baslik:"Başlık",
    tanim:"Hoşgeldiniz bugünki yazılarımızda değişiklik yoktur",
    foto:kod3
  }],[{
    baslik:"Başlık",
    tanim:"Selamlar bugünki yazılarımızda değişiklik yoktur",
    foto:kod
  },{
    baslik:"Başlık",
    tanim:"İlk olarak bugünki yazılarımızda değişiklik yoktur",
    foto:kod2
  },{
    baslik:"Başlık",
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

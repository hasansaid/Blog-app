import React, {useState} from 'react'; // {useState} komutu ile import edilir.
import './styles.css';
import Article from './Article';
import Categories from './Categories';
import ali from '../../../static/images/ali.jpg';
import me from '../../../static/images/me.jpeg';
import me2 from '../../../static/images/me2.jpg';

const Body = () => {
  const makaleler = [
    {
      baslik: 'React Compenent Kullanımı',
      foto: ali,
      aciklama: 'Componentlere, uygulamanızı tekrar kullanılabilir parçalara ayırmanıza ve her bir parçayı ayrı ayrı düşünmenize izin verir..',
      adSoyad: 'Cemil Özen',
      etiketler: ['react', 'component'],
    },
    {
      baslik: 'React State ve Props Nedir?',
      foto: me,
      aciklama: "Kartların üzerine tıklanıldığında da işin; yapıldı, yapılmadı durumu (State) değişecek. Görüldüğü üzere React kütüphanesi yazdığımız kodu bizim için oldukça anlamlı hale getiriyor. Props, oluşturduğumuz component'lerin özelliklerini tutarken, State ise sayfanın ya da bir componentin durumunu tutuyor",
      adSoyad: 'Fatih Bülbül',
      etiketler: ['react', 'state', 'props'],
    },
    {
      baslik: 'React Routing',
      foto: me2,
      aciklama: 'React Router Dom. React Router kütüphanesi sayfalar arasında gezinmek için bize etkin bir yol sunar. Bunu web uygulamasında kullanabilmemiz için React Router Dom kütüphanesi devreye giriyor. Bu kütüphanede bulunan bileşenler (component) sayesinde uygulama sayfaları arasında gezinmek oldukça kolaylaşıyor.',
      adSoyad: 'Fuat Ulusoy',
      etiketler: ['react', 'routing', 'router'],
    },
    {
      baslik: '.net Giriş',
      foto: me2,
      aciklama: 'React Router Dom. React Router kütüphanesi sayfalar arasında gezinmek için bize etkin bir yol sunar. Bunu web uygulamasında kullanabilmemiz için React Router Dom kütüphanesi devreye giriyor. Bu kütüphanede bulunan bileşenler (component) sayesinde uygulama sayfaları arasında gezinmek oldukça kolaylaşıyor.',
      adSoyad: 'Fuat Ulusoy',
      etiketler: ['.net'],
    },
  ];

  // state anlık değişen değişken
  const [sayac, setSayac] = useState (0);

  const [konu, setKonu] = useState ('');

  return (
    <div className="articles-container">
      {/* onClick={() => {
        setSayac (sayac + 1);
        setKonu ('props');
      }} */}
      <div className="articles-layout">
        <div className="articles-icerik">

          {makaleler
            .filter (makale => {
              return konu == '' || makale.etiketler.includes (konu); // makalenin etiketlerine göre kategoriden seçilen kelimeye göre ekrana makale getirme (filtreleme). konu == ('') komutu ilede konu değeri boş olduğunda da makalelerin ekrana dönmesini sağlarız.
            })
            .map (makale => {
              return (
                <Article
                  baslik={makale.baslik}
                  foto={makale.foto}
                  aciklama={makale.aciklama}
                  adSoyad={makale.adSoyad}
                  etiketler={makale.etiketler}
                />
              );
            })}

        </div>
        <Categories setKonu={setKonu} />

        {/* {sayac} */}
      </div>
    </div>
  );
};

export default Body;

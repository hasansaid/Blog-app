import React from 'react';
import './styles.css';
import pic1 from '../../static/images/pic1.jpg';
import Card from './Card';
const About = () => {
  return (
    <div className="container-about">
      <div className="about">
        <div className="about-body">
          <img src={pic1} alt="" className="img" />
        </div>
        <div className="about-text">
          <div className="text">
            <br />
            Küçük Mustafa, öğrenim çağına gelince annesinin arzusu üzerine Hafız
            Mehmet Efendi'nin mahalle mektebinde ilköğrenimine başladı. Kısa bir
            süre sonra babasının isteğiyle devrinin şartlarına göre modern
            eğitim veren Şemsi Efendi Mektebine geçti.
            <br />
            <br /> Bu sırada babasını kaybetti. Bir süre Rapla Çiftliği'nde
            dayısının yanında kaldıktan sonra Selânik'e dönüp okulunu bitirdi.
            Selânik Mülkiye Rüştiyesine kaydoldu ve kısa bir süre sonra, 1893
            yılında, Selanik Askerî Rüştiyesine girdi. Çok sevdiği matematik
            dersinin öğretmeni Yüzbaşı Mustafa Efendi’den, “Kemal” adını aldı.
            Böylece adı “Mustafa Kemal” oldu. Selanik Askerî Rüştiyesini
            bitirdikten sonra 1896 yılında Manastır Askerî İdadisine başladı.
            Edebiyata olan ilgisi, onda gelecekteki hitabet ve yazılı anlatım
            ustalığının temelini oluşturdu.
            <br /> <br />
            Manastır Askerî İdadisindeki tarih öğretmeni Kolağası Mehmet Tevfik
            Bey, Mustafa Kemal’in tarihe ve özellikle Türk tarihine ilgi
            duymasında başlıca etken oldu. 1896-1899 yıllarında Manastır Askeri
            İdadisini bitirip, İstanbul’da Harp Okulu’nun piyade sınıfına
            yazıldı. Bu okuldaki öğrenciliği sırasında arkadaşlarıyla birlikte
            hürriyet fikirlerini <br />
            <br />
            yaymak amacıyla gizli olarak el basması bir gazete çıkardı. 1902
            yılında Harp Okulundan teğmen rütbesiyle mezun olarak Harp
            Akademisine girdi.
            <br />
            <br />
          </div>
        </div>

        <div className="about-triangle">
          <div className="triangle-1">
            <div className="text">
              Mobil
              <br /> %20
            </div>
          </div>
          <div className="triangle-2">
            <div className="text">
              Masaüstü
              <br /> %50
            </div>
          </div>

          <div className="triangle-3">
            <div className="text">
              Web <br /> %45
            </div>
          </div>
          <div className="triangle-4">
            <div className="text">
              Eğitim <br />
              %10
            </div>
          </div>
          <div className="triangle-5">
            <div className="text">
              Grafik
              <br /> %5
            </div>
          </div>
          <div className="triangle-6">
            <div className="text">
              Diger
              <br /> %5
            </div>
          </div>
        </div>
        <div className="About-card">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default About;

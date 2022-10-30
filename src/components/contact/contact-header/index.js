import React from 'react';
import './styles.css';
import telefon from '../../../static/images/telefon2.jpg';
import {Mail, CurrentLocation, PhoneCalling} from 'tabler-icons-react';

const CContact_header = () => {
  return (
    <div className="contact-header-container">
      <div className="contact-header-layout">
        <div className="contact-header-ride">
          <div className="contact-ride">
            <h2>İletişim Bilgilerimiz</h2>
            Sayfanın sonundaki proje formu kullanarak proje taleplerinize dair ön bilgilendirme yapabilir, İletişim Formu yoluyla soru ve görüşlerinizi bizlerle paylaşabilir, telefon ve adres bilgilerimizden bizimle iletişe geçebilirsiniz.
            <br />
            Sayfanın sonundaki proje formu kullanarak proje taleplerinize dair ön bilgilendirme yapabilir, İletişim Formu yoluyla soru ve görüşlerinizi bizlerle paylaşabilir, telefon ve adres bilgilerimizden bizimle iletişe geçebilirsiniz.
            <br />
            Sayfanın sonundaki proje formu kullanarak proje taleplerinize dair ön bilgilendirme yapabilir, İletişim Formu yoluyla soru ve görüşlerinizi bizlerle paylaşabilir, telefon ve adres bilgilerimizden bizimle iletişe geçebilirsiniz.
          </div>
          <div className="ride-image"><img src={telefon} /></div>
        </div>
        <div className="contact-line">
          {' '}
          <hr
            style={{border: 'none', height: '1px', backgroundColor: 'black'}}
          />
          {' '}
        </div>
        <div className="cardmine">
          <div className="card-a-a-a">
            <div className="contact-icon">
              <CurrentLocation size={80} strokeWidth={2} color={'black'} />
            </div>
            <br />
            Ahmet Yesevi Caddesi Zafer Mahallesi Coşarsu Sokak No:69 Daire:4 Bahçelievler/İstanbul
            <hr />
            P.tesi-Cuma günleri arasında 10:00-20:00 arasında açığız.
          </div>
          <div className="card-a-a-a">
            <div className="contact-icon">
              <Mail size={80} strokeWidth={2} color={'black'} />
            </div>
            <br />
            blogapp@gmail.com<br />
            appblog@icloud.com
            <hr />
            Gönerdmiş olduğunuz maillere gün içerisinde dönüş yapılacaktır.
          </div>
          <div className="card-a-a-a">
            <div className="contact-icon">
              <PhoneCalling size={80} strokeWidth={2} color={'black'} />
            </div>
            <br />
            +90 (551) 321 32 31<br />
            +90 (312) 555 32 31
            <hr />
            P.tesi - Cuma günleri arasında 09:00-19:00 arasında ulaşabilirsiniz.
          </div>
        </div>
      </div>
    </div>
  );
};

export default CContact_header;

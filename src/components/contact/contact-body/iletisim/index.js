import React from 'react';
import './styles.css';

const iletisim = () => {
  return (
    <div className="iletisim-container">
      <h1>İletişim Formu</h1>
      <div className="iletisim-form">
        <div className="adsoyad">
          <span>Adınız - Soyadınız: </span>
          <input type="text" />
        </div>
        <div className="e-posta">
          <span>E-posta:</span>
          <input type="text" />
        </div>
      </div>
      <div className="mesaj">
        <span>Mesajınız:</span>
        <textarea rows={10} />
      </div>
      <div className="gonder">
        <button type="btn">GÖNDER</button>
      </div>
    </div>
  );
};

export default iletisim;

import React from 'react';
import './styles.css';

const basvuru = () => {
  return (
    <div className="basvuru-container">
      <h1>Başvuru Formu</h1>
      <div className="basvuru-layout">
        <div className="first-div">
          <div className="a">
            <span>Adınız - Soyadınız:</span>
            <input type="text" />
          </div>
          <div className="a">
            <span>Kişisel web siteniz:</span>
            <input type="text" />
          </div>
          <div className="a">
            <span>E-posta:</span>
            <input type="text" />
          </div>
          <div className="a">
            <span>Telefon:</span>
            <input type="text" />
          </div>
          <div className="a">
            <span>GitHub:</span>
            <input type="text" />
          </div>
          <div className="a">
            <span>LinkedIn:</span>
            <input type="text" />
          </div>
          <div className="a">
            <span>CV Url:</span>
            <input type="text" />
          </div>
        </div>
        <div className="second-div">
          <div className="b">
            <span> Başvurduğunuz Pozisyon: </span>
            <input type="text" />
          </div>
          <div className="b">
            <span> Mesaj: </span>
            <textarea rows={18} />
          </div>
        </div>

      </div>
      <div className="third-div">
        <button>GÖNDER</button>
      </div>
    </div>
  );
};

export default basvuru;

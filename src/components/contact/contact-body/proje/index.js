import React from 'react';
import './styles.css';

const proje = () => {
  return (
    <div className="proje-container">
      <div className="proje-layout">
        <h1>Proje Formu</h1>
        <div className="kisisel-bilgiler">
          <h2>Kişisel Bilgiler</h2>
          <div className="kisisel">
            <span className="proje-span">İsim: </span><input type="text" />
          </div>
          <div className="kisisel">
            <span className="proje-span">Cep Telefonu: </span>
            <input type="text" />
          </div>
          <div className="kisisel">
            <span className="proje-span">E-posta: </span><input type="text" />
          </div>
        </div>
        <div className="firma-bilgileri">
          <h2>Firma Bilgileri</h2>
          <div className="firma">
            <span className="proje-span">Firma Adı: </span><input type="text" />
          </div>
          <div className="firma">
            <span className="proje-span">Firmadaki Pozisyonunuz:</span>
            <input type="text" />
          </div>
          <div className="firma">
            <span className="proje-span">Firma Web Sitesi:</span>
            <input type="text" />
          </div>
          <div className="firma">
            <span className="proje-span">Firma Telefonu:</span>
            <input type="text" />
          </div>
        </div>
        <div className="proje-bilgiler">
          <h2>Proje Bilgileri</h2>
          <div className="proje">
            <span className="proje-span">Proje Adı:</span><input type="text" />
          </div>
          <div className="proje">
            <span className="proje-span">Proje Detayları:</span>
            <input type="text" />
          </div>
        </div>
        <button className="proje-gonder">GÖNDER</button>
      </div>
      <div />

    </div>
  );
};

export default proje;

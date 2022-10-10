import React from 'react';
import './styles.css';
import Language from '../../../languages';
import db from '@yusuf-yeniceri/easy-storage';

const Header = () => {
  return (
    <div className="container">
      <div className="layout">
        <div className="logo-container">
          LOGO
        </div>
        <div className="nav-container">
          <div className="nav-layout">
            <div>
              <a href="" className="link">Anasayfa</a>
              <a href="" className="link">Hakkımızda</a>
              <a href="" className="link">Makaleler</a>
              <a href="" className="link">Eğitimler</a>
              <a href="" className="link">Portfolyo</a>
              <a href="" className="link">İletişim</a>
            </div>
            <div>
              <input
                className="search"
                type="text"
                placeholder="Arama yapınız.."
              />
            </div>
            <div
              className="language"
              onClick={() => {
                let currentLang = db.ref ('lang').get ();
                if (currentLang == 'english') {
                  db.ref ('lang').set ('turkish');
                } else if (currentLang == 'turkish') {
                  db.ref ('lang').set ('english');
                }

                window.url = '/';
              }}
            >
              TR
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

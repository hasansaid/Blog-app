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
              <a href="/" className="link">
                {Language.navigation.links[0]}
              </a>
              <a href="/about" className="link">
                {Language.navigation.links[1]}
              </a>
              <a href="/articles" className="link">
                {Language.navigation.links[2]}
              </a>
              <a href="/courses" className="link">
                {Language.navigation.links[3]}
              </a>
              <a href="/portfolio" className="link">
                {Language.navigation.links[4]}
              </a>
              <a href="/contact" className="link">
                {Language.navigation.links[5]}
              </a>
            </div>
            <div>
              <input
                className="search"
                type="text"
                placeholder={Language.navigation.search}
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

                window.location = '/';
              }}
            >
              {Language.navigation.lang}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

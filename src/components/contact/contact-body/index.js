/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/alt-text */
import React, {useState} from 'react';
import './styles.css';
import iletisim from '../../../static/images/iletisim3.svg';
import proje from '../../../static/images/proje.svg';
import basvuru from '../../../static/images/basvuru.svg';

import Iletisim from './iletisim';
import Proje from './proje';
import Basvuru from './basvuru';

const CContact_body = () => {
  const [page, setPage] = useState (0);

  return (
    <div>
      <div className="contact-b-container">
        <div className="contact-i-container">
          <div className="aa">
            <img
              src={iletisim}
              onClick={() => {
                setPage (0);
              }}
            />
          </div>
          İletişim Formu
        </div>

        <div className="contact-i-container">
          <div className="aa">
            <img
              src={proje}
              onClick={() => {
                setPage (1);
              }}
            />
          </div>
          Proje Formu
        </div>
        <div className="contact-i-container">
          <div className="aa">
            <img
              src={basvuru}
              onClick={() => {
                setPage (2);
              }}
            />
          </div>
          Başvuru Formu
        </div>
      </div>
      <div style={{padding: '30px'}}>
        <hr style={{border: 'none', backgroundColor: 'black', height: '1px'}} />
      </div>
      {page == 0 ? <Iletisim /> : page == 1 ? <Proje /> : <Basvuru />}
    </div>
  );
};

export default CContact_body;

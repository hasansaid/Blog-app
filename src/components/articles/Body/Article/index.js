import React from 'react';
import './styles.css';
import me from '../../../../static/images/me.jpeg';
import me2 from '../../../../static/images/me2.jpg';
import ali from '../../../../static/images/ali.jpg';

const Article = ({baslik, foto, aciklama, adSoyad, etiketler}) => {
  return (
    <div>
      <div className="one">
        <p className="two">{baslik}</p>
        <div className="articles-body">
          <div className="foto"> <img src={foto} /></div>
          <div className="aciklama">
            {aciklama}
          </div>
        </div>
        <div className="yazar-tarih">
          {adSoyad} | Yazım Tarihi (Kaç gün önce olduğu)
        </div>
        <div className="articles-footer">
          <div className="etiketler">
            {etiketler.map (etiket => {
              return (
                <span
                  style={{
                    backgroundColor: 'lightblue',
                    border: '1px solid lightblue',
                    borderRadius: '3px',
                    marginRight: '6px',
                    fontSize: '0.9em',
                  }}
                >
                  @{etiket}{' '}
                </span>
              ); // etiketler dizisinin içindeki her bir elemanı ekrana yazdırmak için
            })}
          </div>
          <div className="devam">- DEVAMI- </div>
        </div>
      </div>
    </div>
  );
};

export default Article;

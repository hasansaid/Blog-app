import React from 'react';
import me from '../../../static/images/me.jpeg';
import me2 from '../../../static/images/me2.jpg';
import ali from '../../../static/images/ali.jpg';
import './styles.css';

const Article = () => {
  return (
    <div className="articles-container-a">
      <div className="articles-layout-a">
        <div className="articles-icerik-a">
          <div className="one-a">
            <p className="two-a">React Compenent Kullanımı</p>
            <div className="articles-body-a">
              <img src={me} className="foto-a" />

              <div className="aciklama-a">
                <div className="text-a">
                  Ve son olarakta display:flex; ile yatayda ve dikeyde hizalama
                  konusuna bakalım. Flex ile projelerde kolayca hizalama
                  yapabilir, responsive uyumlu siteler kodlayabiliriz. Bunun
                  yanı sıra güncel tarayıcılarda da desteklendiği için işimizi
                  oldukça Flex ile hizalama yapmak için bir kapsayıcıya
                  ihtiyacımız var. Bizim örneğimizde orange-box-container.
                </div>
              </div>
            </div>
            <div className="yazar-tarih-a">
              <img src={me} className="fot-a" />
              Kamil dil| 01/08/1999 (5 GÜN ÖNCE)
            </div>
            <div className="articles-footer-a">
              <div className="etiketler-a">@react, @lovereact...</div>
              <div className="devam-a">DEVAMI</div>
            </div>
          </div>
          <div className="one-a">
            <p className="two-a">React State ve Props Nedir</p>
            <div className="articles-body-a">
              {' '}
              <img src={me2} className="foto-a" />
              <div className="aciklama-a">
                <div className="text-a">
                  Css ile hizalama yollarından bir diğeri de transform:
                  stillemesidir. Örneği incelediğinizde position:absolute örneği
                  ile bir yere kadar aynı yapıda olduğunu görebilirsiniz.
                  Buradaki fark margin-top ve margin-left değerleri yerine
                  transform kullanmak. Transform ile hizalayacağımız ögenin
                  genişliğini.
                </div>
              </div>
            </div>
            <div className="yazar-tarih-a">
              <img src={me2} className="fot-a" />
              Hayrettin Palaz| 09/01/2011 (3 GÜN ÖNCE)
            </div>
            <div className="articles-footer-a">
              <div className="etiketler-a">@react, @lovereact...</div>
              <div className="devam-a">DEVAMI </div>
            </div>
          </div>
          <div className="one-a">
            <p className="two-a">React Rounting</p>
            <div className="articles-body-a">
              <img src={ali} className="foto-a" />

              <div className="aciklama-a">
                <div className="text-a">
                  Css ile hizalama yollarından bir diğeri de stillemesidir.
                  Buradaki fark margin-top ve margin-left değerleri yerine
                  transform kullanmak. Transform ile hizalayacağımız ögenin
                  genişliğini ve yüksekliğini bilmemize gerek kalmadan
                  transform: stillemesi ile kapsayıcısının içerinde
                  ortalayabiliriz.
                </div>
              </div>
            </div>
            <div className="yazar-tarih-a">
              <img src={ali} className="fot-a" />
              Serdar Saman | 02/02/2021 (1 GÜN ÖNCE)
            </div>
            <div className="articles-footer-a">
              <div className="etiketler-a">@react, @lovereact...</div>
              <div className="devam-a">DEVAMI</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Article;

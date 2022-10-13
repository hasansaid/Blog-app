import React from 'react';
import './styles.css';
import me from '../../static/images/me.jpeg';
import me2 from '../../static/images/me2.jpg';
import ali from '../../static/images/ali.jpg';

const index = () => {
  return (
    <div className="articles-container">
      <div className="articles-layout">
        <div className="articles-icerik">
          <div className="one">
            <p className="two">React Compenent Kullanımı</p>
            <div className="articles-body">
              <div className="foto"> <img src={me} /></div>
              <div className="aciklama">
                Ve son olarakta display:flex; ile yatayda ve dikeyde hizalama konusuna bakalım.
                Flex ile projelerde kolayca hizalama yapabilir, responsive uyumlu siteler kodlayabiliriz. Bunun yanı sıra güncel tarayıcılarda da desteklendiği için işimizi oldukça
                Flex ile hizalama yapmak için bir kapsayıcıya ihtiyacımız var. Bizim örneğimizde orange-box-container.
              </div>
            </div>
            <div className="yazar-tarih">
              Ad Soyad | Yazım Tarihi (Kaç gün önce olduğu)
            </div>
            <div className="articles-footer">
              <div className="etiketler">@react, @lovereact...</div>
              <div className="devam">- DEVAMI- </div>
            </div>
          </div>
          <div className="one">
            <p className="two">React State ve Props Nedir</p>
            <div className="articles-body">
              <div className="foto"> <img src={me2} /></div>
              <div className="aciklama">
                Css ile hizalama yollarından bir diğeri de transform: stillemesidir.
                Örneği incelediğinizde position:absolute örneği ile bir yere kadar aynı yapıda olduğunu görebilirsiniz. Buradaki fark margin-top ve margin-left değerleri yerine transform kullanmak. Transform ile hizalayacağımız ögenin genişliğini.
              </div>
            </div>
            <div className="yazar-tarih">
              Ad Soyad | Yazım Tarihi (Kaç gün önce olduğu)
            </div>
            <div className="articles-footer">
              <div className="etiketler">@react, @lovereact...</div>
              <div className="devam">- DEVAMI- </div>
            </div>
          </div>
          <div className="one">
            <p className="two">React Rounting</p>
            <div className="articles-body">
              <div className="foto"> <img src={ali} /></div>
              <div className="aciklama">
                Css ile hizalama yollarından bir diğeri de stillemesidir. Buradaki fark margin-top ve margin-left değerleri yerine transform kullanmak. Transform ile hizalayacağımız ögenin genişliğini ve yüksekliğini bilmemize gerek kalmadan transform:  stillemesi ile kapsayıcısının içerinde ortalayabiliriz.
              </div>
            </div>
            <div className="yazar-tarih">
              Ad Soyad | Yazım Tarihi (Kaç gün önce olduğu)
            </div>
            <div className="articles-footer">
              <div className="etiketler">@react, @lovereact...</div>
              <div className="devam">- DEVAMI -</div>
            </div>
          </div>

        </div>
        <div className="articles-kategori">
          <p className="kategori-yazı">Kategoriler</p>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default index;

import React from 'react';
import './styles.css';
import kod from '../../../../static/images/kod.jpg';

const Page = ({baslik, tanim, foto}) => {
  return (

    <>


    <div className="page-container">

    <div className='sol-sekil'></div>

      <div className="page-layout">
        <div className="text-yazi">
          <div className="baslik">{baslik}</div>
          <div className="tanim">{tanim}</div>
        </div>
        <div className="page-line"><hr /></div>
        <div className="foto"><img src={foto} /></div>
      </div>

    </div>
    </>
  );
};

export default Page;

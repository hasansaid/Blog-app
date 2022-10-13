import React from 'react';
import './styles.css';

const Categories = ({setKonu}) => {
  return (
    <div>
      <div className="articles-kategori">
        <p className="kategori-yazı">Kategoriler</p>
        <div><hr /></div>

        <div className="etiketler-container">
          <span
            className="etiket"
            onClick={event => {
              setKonu (event.target.innerText);
            }}
          >
            java
          </span>
          <span
            className="etiket"
            onClick={event => {
              setKonu (event.target.innerText);
            }}
          >
            .net
          </span>
          <span
            className="etiket"
            onClick={event => {
              setKonu (event.target.innerText);
            }}
          >
            react
          </span>
        </div>
      </div>
    </div>
  );
};

export default Categories;

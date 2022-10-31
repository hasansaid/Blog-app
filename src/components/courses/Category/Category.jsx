import React, { useState } from "react";
import "./Category.css";

import Categories from "./Categories";

const Category = () => {
  //categori için filtre
  const [data, setData] = useState(Categories);
  const filterResult = (catItem) => {
    const result = Categories.filter((curDate) => {
      return curDate.Category === catItem;
    });
    setData(result);
  };
  return (
    <div className="container">
      
      <div className="col">
        <div className="row-3">
          <button className="btn" onClick={() => setData(Categories)}>
            ALL
          </button>
          <button className="btn" onClick={() => filterResult("React")}>
            React
          </button>
          <button className="btn" onClick={() => filterResult("Vue")}>
            Vue
          </button>
          <button className="btn" onClick={() => filterResult("css")}>
            css
          </button>

          <button className="btn" onClick={() => filterResult(".net")}>
            .net
          </button>
          <button className="btn" onClick={() => filterResult("angular")}>
            angular
          </button>
        </div>
      </div>

      <div className="cards">
        {data.map((values) => {
          const { id, title, price, image, name, tongue, level, hour } = values;
          return (
            <div className="card" key={id}>
              <div className="card-header">
                <img src={image} alt={title} />
              </div>

              <div className="card-body">
                <h5 className="titleProduct">{title}</h5>
                <h4 className="name">{name}</h4>
                <h5 className="tongue">{tongue}</h5>
                <h5 className="level">{level}</h5>
                <h5 className="hour">Süre:{hour} Saat</h5>
                <span className="price">Fiyat{price}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;

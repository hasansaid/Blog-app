import React from "react";
import k from "../../../static/images/k.jpg";
import y from "../../../static/images/y.jpg";
import e from "../../../static/images/e.jpg";
import m from "../../../static/images/m.jpg";
import "./styles.css";

const index = () => {
  return (
    <div className="container-card">
      <div className="cardd">
        <div className="image">
          <img src={y} alt="" className="image__img" />
          <div className="image__overlay">
            <div className="image__title">Ceylan Yağmur</div>
            <p className="image__description">Her günüm en güzel günüm</p>
          </div>
        </div>
      </div>
      <div className="cardd">
        <div className="image">
          <img src={k} alt="" className="image__img" />
          <div className="image__overlay">
            <div className="image__title">Ceylan Yağmur</div>
            <p className="image__description">Her günüm en güzel günüm</p>
          </div>
        </div>
      </div>
      <div className="cardd">
        <div className="image">
          <img src={m} alt="" className="image__img" />
          <div className="image__overlay">
            <div className="image__title">Ceylan Yağmur</div>
            <p className="image__description">Her günüm en güzel günüm</p>
          </div>
        </div>
      </div>
      <div className="cardd">
        <div className="image">
          <img src={e} alt="" className="image__img" />
          <div className="image__overlay">
            <div className="image__title">Ceylan Yağmur</div>
            <p className="image__description">Her günüm en güzel günüm</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;

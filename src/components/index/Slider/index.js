import React from 'react';
import './styles.css';
import pic0 from '../../../static/images/pic0.jpg';
import pic1 from '../../../static/images/pic1.jpg';
import pic2 from '../../../static/images/pic2.jpg';
import pic3 from '../../../static/images/pic3.jpg';
import pic4 from '../../../static/images/pic4.png';

const Slider = () => {
  return (
    <div>
      <div class="slider-container">
        <div class="slider">
          <div class="slides">
            <div id="slides__1" class="slide">
              <img src={pic4} />
              <a class="slide__prev" href="#slides__4" title="Next" />
              <a class="slide__next" href="#slides__2" title="Next" />
            </div>
            <div id="slides__2" class="slide">
              <img src={pic0} />
              <a class="slide__prev" href="#slides__1" title="Prev" />
              <a class="slide__next" href="#slides__3" title="Next" />
            </div>
            <div id="slides__3" class="slide">
              <img src={pic1} />
              <a class="slide__prev" href="#slides__2" title="Prev" />
              <a class="slide__next" href="#slides__4" title="Next" />
            </div>
            <div id="slides__4" class="slide">
              <img src={pic3} />
              <a class="slide__prev" href="#slides__3" title="Prev" />
              <a class="slide__next" href="#slides__1" title="Prev" />
            </div>
          </div>
          <div class="slider__nav">
            <a class="slider__navlink" href="#slides__1" />
            <a class="slider__navlink" href="#slides__2" />
            <a class="slider__navlink" href="#slides__3" />
            <a class="slider__navlink" href="#slides__4" />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Slider;

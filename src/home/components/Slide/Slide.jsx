import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import "./Slide.css"

import Img03 from "../../../shared/images/Img03.png";

const Slider = props => {
    return (
          <Slide easing="ease">
            <div className="each-slide">
              <div>
                <span>Slide 1</span>
              </div>
            </div>
            <div className="each-slide">
              <div>
                <span>Slide 2</span>
              </div>
            </div>
            <div className="each-slide">
              <div>
                <span>Slide 3</span>
              </div>
            </div>
          </Slide>
      )
}

export default Slider;
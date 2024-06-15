// eslint-disable-next-line no-unused-vars
import React from "react";
import Slider from "infinite-react-carousel";

import "./slide.scss";

// eslint-disable-next-line react/prop-types
const Slide = ({ children, slidesToShow, arrowsScroll }) => {
    return (
        <div className="slide">
            <div className="container">
                <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
                    {children}
                </Slider>
            </div>
        </div>
    );
};

export default Slide;

import React, { Component } from 'react';
import Slider from 'react-slick';
import './Slide.css';

export default class componentName extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        var settings = {
            dots: true,
            autoplay: true,
            className: 'posterSlide',
            dotsClass: 'posterSlide__dots',
            // slidesToShow: 1,
            // slidesToScroll: 1
        };
        return (
            <Slider {...settings}>
                <div>
                    <img className="posterSlide__image" src="./source/slide/slide1.jpeg" alt='' />
                </div>
                <div>
                    <img className="posterSlide__image" src="./source/slide/slide2.jpeg" alt='' />
                </div>
                <div>
                    <img className="posterSlide__image" src="./source/slide/slide3.jpeg" alt=''/>
                </div>
                <div>
                    <img className="posterSlide__image" src="./source/slide/slide4.jpeg" alt='' />
                </div>
                <div>
                    <img className="posterSlide__image" src="./source/slide/slide5.jpeg" alt='' />
                </div>
            </Slider>
        )
    }
}

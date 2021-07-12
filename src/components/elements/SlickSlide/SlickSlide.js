import React, { Component } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Slider from "react-slick";

export default class MultipleSlick extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sliders: props.items
        }
    }

    sliders() {
        return this.state.sliders.map((item,index) => {
            return (
                <div key={index} className="flex-imp flex-col w-full items-center content-center justify-center">
                   <LazyLoadImage
              src={item.avatar.type}
              alt="Logo"
              className={`w-full mx-auto`}
              effect="blur"
            />
                    <h2>{item.name}</h2>
                </div>
            )
        });
    }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    console.log(this.state);
    return (
      <div className="text-black">
        <Slider {...settings}>
                    {this.sliders()}
                </Slider>
      </div>
    );
  }
}
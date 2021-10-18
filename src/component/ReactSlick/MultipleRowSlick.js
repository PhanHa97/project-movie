import React, { Component } from "react";
import Slider from "react-slick";
import {LeftOutlined, RightOutlined} from "@ant-design/icons";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import Film from "../Film/Film"
export default class MultipleRowsSlick extends Component {

renderFilm = () => {
  return this.props.arrFilm.map((item,index)=>{
    return  (
      <div key={index} className="width-item">
        <Film />
      </div>
    )
  })
}

  render() {
    const settings = {
      className: "center variable-width ",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
      rows: 1,
      slidesPerRow: 2,
      variableWidth: true
    };
    return (
      <div>
        <h2>Multiple Rows</h2>
        <Slider {...settings}>
          {this.renderFilm()}
          {this.renderFilm()}
          {this.renderFilm()}
          {this.renderFilm()}
          {this.renderFilm()}
          {this.renderFilm()}
          {this.renderFilm()}
        </Slider>
      </div>
    );
  }
}
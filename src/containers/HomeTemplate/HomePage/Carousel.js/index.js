import React, { useEffect } from "react";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

export default function Carousel(props) {
    const { arrImg } = useSelector((state) => state.CarouselReducer);
    console.log('arrImg', arrImg);
    const dispatch = useDispatch();



    const renderImg = () => {
        return arrImg.map((item, index) => {
            return (
                <div
                    key={index}
                    className="carousel-item active"
                >
                    <img src={item.hinhAnh} className="img-fluid" alt="Los Angeles" />
                </div>
            );
        });
    };
    return (
        <div id="demo" className="carousel slide" data-ride="carousel">
            <ul className="carousel-indicators">
                <li data-target="#demo" data-slide-to={0} className="active" />
                <li data-target="#demo" data-slide-to={1} />
                <li data-target="#demo" data-slide-to={2} />
            </ul>
            <div className="carousel-inner ">
                {renderImg()}
                {/* <div className="carousel-item">
                    <img src="https://picsum.photos/1000" className="img-fluid" alt="Chicago" />
                </div>
                <div className="carousel-item">
                    <img src="https://picsum.photos/1000" className="img-fluid" alt="New York" />
                </div> */}
            </div>
            <a className="carousel-control-prev" href="#demo" data-slide="prev">
                <span className="carousel-control-prev-icon" />
            </a>
            <a className="carousel-control-next" href="#demo" data-slide="next">
                <span className="carousel-control-next-icon" />
            </a>
        </div>
    );
}

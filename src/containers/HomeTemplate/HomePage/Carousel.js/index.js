import React, { Component } from 'react';
import "./style.css"

export default class Carousel extends Component {
    render() {
        return (
            <div id="demo" className="carousel slide" data-ride="carousel">
                <ul className="carousel-indicators">
                    <li data-target="#demo" data-slide-to={0} className="active" />
                    <li data-target="#demo" data-slide-to={1} />
                    <li data-target="#demo" data-slide-to={2} />
                </ul>
                <div className="carousel-inner ">
                    <div className="carousel-item active">
                        <img src="https://picsum.photos/1000" className="img-fluid" alt="Los Angeles" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://picsum.photos/1000" className="img-fluid" alt="Chicago" w-full />
                    </div>
                    <div className="carousel-item">
                        <img src="https://picsum.photos/1000" className="img-fluid" alt="New York" w-full />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#demo" data-slide="prev">
                    <span className="carousel-control-prev-icon" />
                </a>
                <a className="carousel-control-next" href="#demo" data-slide="next">
                    <span className="carousel-control-next-icon" />
                </a>
            </div>

        )
    }
}

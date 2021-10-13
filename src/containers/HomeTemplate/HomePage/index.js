import React, { Component } from 'react'
import Carousel from './Carousel.js'
import ListMovieHome from './ListMovieHome/index.js'
import MenuHome from './MenuHome/index.js'

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <Carousel />
                <ListMovieHome />
                <MenuHome />
            </div>
        )
    }
}

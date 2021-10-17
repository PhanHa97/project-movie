import React, { Component } from 'react'
import HomeCarousel from './HomeCarousel.js/HomeCarousel.js'

import ListMovieHome from './ListMovieHome/index.js'
import MenuHome from './MenuHome/index.js'

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <HomeCarousel />
                <ListMovieHome />
                <MenuHome />
            </div>
        )
    }
}

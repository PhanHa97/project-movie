import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import "./style.css"

export default class Navbar extends Component {
    render() {
        return (
            <div className="header" >
                <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                    <Link className="navbar-brand " to="/">
                        <img src="./img/movie-04.png" alt="" />
                    </Link>
                    <button className="navbar-toggler">
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item home-center">
                                <NavLink exact activeClassName="active" className="nav-link " to="/">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName="active" className="nav-link about-center" to="/about">
                                    About
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName="active" className="nav-link list-movie-center" to="/list-movie">
                                    ListMovie
                                </NavLink>
                            </li>
                            <li className="nav-item login">
                                <NavLink className="nav-link" to="/login" >
                                    Login
                                </NavLink>
                            </li>
                            <li className="nav-item logout">
                                <NavLink className="nav-link" to="/logout">
                                    Logout
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import "./style.css"

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                    {/* Brand */}
                    <Link className="navbar-brand" to="/">
                        Logo
                    </Link>
                    {/* Toggler/collapsibe Button */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapsibleNavbar"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    {/* Navbar links */}
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink exact activeClassName="active" className="nav-link" to="/">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName="active" className="nav-link" to="/about">
                                    About
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName="active" className="nav-link" to="/list-movie">
                                    ListMovie
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>

            </div>
        )
    }
}

import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import "../../css/sidebar.css"
export default class Sidebar extends Component {
    render() {
        return (
            <div className="wrapper">
                {/* Sidebar */}
                <nav id="sidebar" >
                    <div className="sidebar-header text-center">
                        <img className="w-75" src="./img/logo.jpg" />
                    </div>
                    <ul className="list-unstyled components">
                        <NavLink exact activeClassName="active" className="nav-link" to="/user">
                            Users
                        </NavLink>
                        <li className="active">
                            <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Films</a>
                            <ul className="collapse list-unstyled" id="homeSubmenu">
                                <NavLink exact activeClassName="active" className="nav-link" to="/films">
                                    Films
                                </NavLink>
                                <NavLink exact activeClassName="active" className="nav-link" to="/addNew">
                                    Add New
                                </NavLink>

                            </ul>
                        </li>


                        <NavLink exact activeClassName="active" className="nav-link " to="/Showtime">
                            Showtime
                        </NavLink>

                    </ul>
                </nav>
            </div>

        )
    }
}

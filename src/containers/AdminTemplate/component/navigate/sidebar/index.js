import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import "../../../css/sidebar.css"

export default class Sidebar extends Component {
    render() {
        return (
            <div className="wrapper dashboard">
                {/* Sidebar */}
                <nav id="sidebar" >
                    <div className="sidebar-header text-center">
                        <img style={{ borderRadius: "50%" }} className="w-75" src="./img/lgoCyber.jpg" />
                    </div>
                    <ul className="list-unstyled components">
                        <NavLink exact activeClassName="active" style={{ fontSize: "25px" }} className="nav-link mb-5" to="/user">
                            Users
                        </NavLink>
                        <li className="active">
                            <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" style={{ fontSize: "25px" }} className="dropdown-toggle pl-3 ">Films</a>
                            <ul className="collapse list-unstyled" id="homeSubmenu">
                                <NavLink exact activeClassName="active" className="nav-link  " to="/films">
                                    Films
                                </NavLink>
                                <NavLink exact activeClassName="active" s className="nav-link " to="/addNew">
                                    Add New
                                </NavLink>
                            </ul>
                        </li>
                        <NavLink exact activeClassName="active" style={{ fontSize: "25px" }} className="nav-link mt-5 " to="/Showtime">
                            Showtime
                        </NavLink>

                    </ul>
                </nav>
            </div>

        )
    }
}

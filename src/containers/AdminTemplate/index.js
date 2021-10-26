
import React from 'react'
import "./css/style.css"
import { Route } from 'react-router-dom'
import Sidebar from './component/navigate/sidebar'
export default function Admin(props) {
    const { exact, path, component } = props
    return (
        <div className="container-fluid  ">
            <div className="row row-general ">
                <div className="col-md-2 adminLeft">
                    <Sidebar />
                </div>
                <div className="col-md-10 " >
                    <div className="nav-logout mb-5" >

                        <button className=" logout p-3" style={{ fontSize: "25px" }} >Đăng xuất</button>
                    </div>
                    <div className="adminRight">
                        <Route
                            exact={exact}
                            path={path}
                            component={component}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}




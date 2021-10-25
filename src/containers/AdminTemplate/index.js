
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

                        <button className="btn btn-dark logout p-3" style={{ fontSize: "25px", borderRadius: "20px" }} >Đăng xuất</button>
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



// export default class Admin extends Component {

//     render() {

//         return (
//             <div className="container-fluid">
//                 <div className="row">
//                     <div className="col-md-2 bg-success">
//                         <div className="logoAdmin text-center">
//                             <img src="./img/logo.jpg" className="w-50" />
//                         </div>
//                         <div className="navigate">
//                             {NestedList()}
//                         </div>
//                     </div>
//                     <div className="col-md-10 bg-warning" >
//                         Quyền
//                     </div>

//                 </div>
//             </div>
//         )
//     }
// }

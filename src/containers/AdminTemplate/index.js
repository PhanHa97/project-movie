
import React from 'react'
import "./css/style.css"
import Sidebar from './component/sidebar'
export default function Admin() {
    return (
        <div className="container-fluid">
            <div className="row general">
                <div className="col-md-2 bg-success left">
                    <div className="logoAdmin text-center mb-5">
                        <img src="./img/logo.jpg" className="w-50" />
                    </div>
                    <div className="navigate">
                        <Sidebar />
                    </div>
                </div>
                <div className="col-md-10 bg-warning" >
                    Quyền
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

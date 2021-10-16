import React, { Component } from 'react'
import { FaSearch } from "react-icons/fa"
import "../css/style.css"
export default class Films extends Component {
    render() {
        return (
            <div className="header-filmPage mt-2 ">
                <h1>Quản lý phim</h1>
                <button className="btn btn-success">Thêm phim</button>
                <div className="input-group mb-3 mt-5 w-100">
                    <input type="text" className="form-control" placeholder="Nhập tên phim" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    <div className="input-group-append">
                        <span className="input-group-text" id="basic-addon2"><FaSearch /></span>
                    </div>
                </div>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

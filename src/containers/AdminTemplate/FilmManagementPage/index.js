import { data } from 'jquery'
import React, { Component } from 'react'
import { FaSearch } from "react-icons/fa"
import { connect } from 'react-redux'
import "../css/style.css"

import { fetchDataFilm } from './_Component/action'
import Loader from '../component/Loader'
import { Link, NavLink } from 'react-router-dom'
class Films extends Component {
    componentDidMount() {
        this.props.fetchFilm()
        const { data } = this.props
        console.log(data)
    }

    renderFilm = () => {
        const { data, loading } = this.props

        if (loading) {
            return <Loader />
        }
        return data.map((item, key) => {
            return <tr className="row text-light" style={{ fontSize: "18px" }}>
                <td className="col-2 text-light">{item.maPhim}</td>
                <td className="col-3" ><img className="w-25" src={item.hinhAnh} /></td>
                <td className="col-2">{item.tenPhim}</td>
                <td className="col-2">

                    <NavLink className="btn btn-success" to={`edit/${item.maPhim}`}>Update</NavLink>
                    <button className="btn btn-warning ">Delete</button>



                </td>
                <td className="col-3"> <iframe className=" w-100 h-100 responsive-iframe" src={item.trailer} />
                </td>
            </tr >
        })
    }

    render() {

        return (
            <div className="bgAdd1 w-100">
                <div className="header-filmPage m-5  ">
                    <h1 className="text-light">Quản lý phim</h1>
                    <Link exact activeClassName="active" className="btnAddnew  nav-link" to="/addNew">
                        Add New
                    </Link>
                    <div className="input-group mb-3 mt-5 w-100">
                        <input type="text" className="form-control" placeholder="Nhập tên phim" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <div className="input-group-append">
                            <span className="input-group-text" id="basic-addon2"><FaSearch /></span>
                        </div>
                    </div>
                    <table className="table">
                        <thead>
                            <tr className="row text-light" style={{ fontSize: "20px" }} >
                                <th className="col-2" scope="col">Mã phim</th>
                                <th className="col-3" scope="col">Hình ảnh</th>
                                <th className="col-2" scope="col">Tên phim</th>
                                <th className="col-2" scope="col">Bí danh</th>
                                <th className="col-3" scope="col">Trailer</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderFilm()}
                        </tbody>
                    </table>
                </div >
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        data: state.reducerRenderFilm.data,
        loading: state.reducerRenderFilm.loading
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchFilm: () => {
            dispatch(fetchDataFilm())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Films)



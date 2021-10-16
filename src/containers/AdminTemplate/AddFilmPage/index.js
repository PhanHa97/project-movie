import React, { Component } from 'react'
import { FaSearch } from 'react-icons/fa'
import "../css/style.css"
export default class AddFilm extends Component {
    render() {
        return (
            <div className="header-filmPage mt-2 ">
                <h1>Thêm mới phim</h1>
                {/* <div> Form Size :
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-secondary">Left</button>
                        <button type="button" className="btn btn-secondary">Middle</button>
                        <button type="button" className="btn btn-secondary">Right</button>
                    </div>
                </div>
                <div> Tên phim: <input /></div>
                <div> Trailer: <input /> </div>
                <div> Mô tả: <input /> </div>
                <div> Ngày khởi chiếu: <input type="date" /> </div>
                <div> Đang chiếu:
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Default switch checkbox input</label>
                    </div>

                </div>
                <div> Sắp chiếu: </div>
                <div> Hot:</div> */}
                {/* ------------------- */}
                <form className="ml-5 mt-5">
                    <div className=" form-group row"> <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Form Size </label>
                        <div className="btn-group " role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-secondary">Left</button>
                            <button type="button" className="btn btn-secondary">Middle</button>
                            <button type="button" className="btn btn-secondary">Right</button>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Tên phim</label>
                        <div className="">
                            <input type="password" className=" form-control" id="inputPassword3" placeholder="Password" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Trailer</label>
                        <div className="">
                            <input type="password" className="form-control" id="inputPassword3" placeholder="Password" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Mô tả</label>
                        <div className="">
                            <input type="password" className="form-control" id="inputPassword3" placeholder="Password" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Mô tả</label>
                        <div className="">
                            <input type="date" className="form-control" id="inputPassword3" placeholder="Password" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Đang chiếu</label>
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round" />
                        </label>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Sắp chiếu</label>
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round" />
                        </label>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Hot</label>
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round" />
                        </label>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Số sao</label>
                        <div className="">
                            <input type="password" className="form-control" id="inputPassword3" placeholder="Password" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Số sao</label>
                        <div className="">
                            <input type="file" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Tác vụ</label>
                        <div className="">
                            <input type="submit" value="Thêm phim" placeholder="Thêm phim" />
                        </div>
                    </div>




                </form >

            </div >
        )
    }
}

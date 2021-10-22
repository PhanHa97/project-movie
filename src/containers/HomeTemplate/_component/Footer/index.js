import React from 'react'
import "./style.css"
import {useSelector} from "react-redux";
import _ from 'lodash';

export default function Footer (props) {

    const {heThongRapChieu} = useSelector(state => state.QuanLyRapReducer);
    const arrHeTongRap = _.map(heThongRapChieu,(heThongRap) => _.pick(heThongRap,['maHeThongRap','tenHeThongRap']));

    console.log('arr',arrHeTongRap);

    return (
        <section className>
            <footer className="footer text-white">
                <div className="container p-4">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                            <img src="./img/movie-04.png" alt="" className="text-uppercase"></img>
                            <p></p>
                            <p>
                                197  Học Viện Bưu Chính Viễn Thông  Quận 9, Thành Phố Hồ CHí Minh
                            </p>
                             <p>Hotline: (+84) 39 888 4550 </p>

                        </div>
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0 ">
                            <h6 className="text-white">Chinh Sách</h6>
                            <p></p>
                            <ul className="list-unstyled mb-0">
                                <li>
                                    <a href="#!" className="text-white">
                                        Chính Sách Bảo Mật
                                    </a>
                                </li>
                                <p></p>
                                <li>
                                    <a href="#!" className="text-white">
                                        Câu hỏi thường gặp
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h6 className="text-white mb-0">Tài Khoản</h6>
                            <p></p>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="#!" className="text-white">
                                        Tài Khoản của tôi 
                                    </a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">
                                       Danh sách theo dõi
                                    </a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">
                                        Bộ sưu tập 
                                    </a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">
                                        Hướng dẫn sử dụng
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </footer>
        </section>

    )
}

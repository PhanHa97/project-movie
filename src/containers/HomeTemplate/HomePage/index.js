import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { layDanhSachHeThongRapACtion } from "../../../redux/actions/QuanLyRapAction.js";
import HomeCarousel from "./HomeCarousel.js/HomeCarousel.js";

import ListMovieHome from "./ListMovieHome/index.js";
import MenuHome from "./MenuHome/index.js";

export default function HomePage(props) {
  const { heThongRapChieu } = useSelector((state) => state.QuanLyRapReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(layDanhSachHeThongRapACtion());
  });

  return (
    <div>
      <HomeCarousel />
      <ListMovieHome />
      {/* <MenuHome heThongRapChieu={heThongRapChieu} /> */}
      <br />
      <br />
    </div>
  );
}

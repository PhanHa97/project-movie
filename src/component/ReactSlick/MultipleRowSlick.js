import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import FlipCard from "../Film/Film_FlipCard";
import { useDispatch, useSelector } from "react-redux";
import {
  SET_FILM_DANG_CHIEU,
  SET_FILM_SAP_CHIEU,
} from "../../redux/actions/types/QuanLyPhimType";

const MultipleRowsSlick = (props) => {
  const dispatch = useDispatch();
  const { dangChieu, sapChieu } = useSelector(
    (state) => state.QuanLyPhimReducer
  );
  const renderFilm = () => {
    return props.arrFilm.slice(0, 12).map((item, index) => {
      return (
        <div key={index} className=" width-item mt-2">
          <FlipCard item={item} />
        </div>
      );
    });
  };

  let activeClass_DC = dangChieu === true ? "active_Film" : "";
  let activeClass_SC = sapChieu === true ? "none_active_Film" : "";

  

  const settings = {
    className: "center variable-width ",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    rows: 1,
    slidesPerRow: 2,
    variableWidth: true,
  };

  return (
    <div>
      <div>
        <button
          className={` ${activeClass_DC} px-8 py-3 font-semibold rounded bg-gray-800 text-white mr-2`}
          onClick={() => {
            const action = { type: SET_FILM_DANG_CHIEU };
            dispatch(action);
          }}
        >
          Phim Đang Chiếu
        </button>
        <button className={`${activeClass_SC} px-8 py-3 font-semibold bg-white text-gray-800 border-gray-800 border`}
        onClick={() => {
          const action = { type: SET_FILM_SAP_CHIEU};
          dispatch(action);
        }}
        >
          Phim Sắp Chiếu
        </button>
      </div>
      <Slider {...settings}>{renderFilm()}</Slider>
    </div>
  );
};

export default MultipleRowsSlick;

import React, { useEffect,useState } from "react";
// kết nối redux
import { useSelector, useDispatch } from "react-redux";
import Film from "../../../../component/Film/Film";
import MultipleRowsSlick from "../../../../component/ReactSlick/MultipleRowSlick";
import { layDanhSachPhimAction } from "../../../../redux/actions/QuanLyPhimAction";

export default function ListMovieHome() {
  const { arrFilm } = useSelector((state) => state.QuanLyPhimReducer);

  const dispatch = useDispatch();

  useEffect(()=>{
    const action  = layDanhSachPhimAction();
    dispatch(action); // dispatch function từ redux-thunk
  },[])

  return (
    <div className="container">
     
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
        <MultipleRowsSlick arrFilm={arrFilm} />
        </div>
      </section>
    </div>
  );
}

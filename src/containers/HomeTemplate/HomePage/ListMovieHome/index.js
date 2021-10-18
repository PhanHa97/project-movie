import React from "react";
// kết nối redux
import { useSelector, useDispatch } from "react-redux";
import Film from "../../../../component/Film/Film";
import MultipleRows from "../../../../component/ReactSlick/MultipleRowSlick";

export default function ListMovieHome() {
  const { arrFilm } = useSelector((state) => state.QuanLyPhimReducer);

  const renderFilm = () => {
    return arrFilm.map((phim, index) => {
      return <Film key={index} />;
    });
  };

  return (
    <div className="container">
      <MultipleRows />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div
            className="flex flex-wrap -m-4"
            style={{ justifyContent: "center" }}
          >
            {renderFilm()}
          </div>
        </div>
      </section>
    </div>
  );
}

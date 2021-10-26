import {
  SET_DANH_SACH_PHIM,
  SET_FILM_DANG_CHIEU,
  SET_FILM_SAP_CHIEU,
} from "../actions/types/QuanLyPhimType";
import Films from "./data/Film.json";

const stateDefault = {
  arrFilm: Films,
  
  dangChieu: true,
  sapChieu: true,
  arrFilmDefault: [],
};

export const QuanLyPhimReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SET_DANH_SACH_PHIM: {
      state.arrFilm = action.arrFilm;
      state.arrFilmDefault = state.arrFilm;
      
      return { ...state };
    }

    case SET_FILM_DANG_CHIEU: {
      state.dangChieu = !state.dangChieu;

      state.arrFilm = state.arrFilm.filter(
        (film) => film.dangChieu === state.dangChieu
      );
      return { ...state };
    }

    case SET_FILM_SAP_CHIEU: {
      state.sapChieu = !state.sapChieu;

      state.arrFilm = state.arrFilm.filter(
        (film) => film.sapChieu === state.sapChieu
      );
      return { ...state };
    }

    default:
      return { ...state };
  }
};

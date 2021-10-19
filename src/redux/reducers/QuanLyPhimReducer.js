import { SET_DANH_SACH_PHIM } from "../actions/types/QuanLyPhimType";
import Film from "./data/Film.json";
const stateDefault = {
  arrFilm: Film,
};

export const QuanLyPhimReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SET_DANH_SACH_PHIM: {
      state.arrFilm = action.arrFilm;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

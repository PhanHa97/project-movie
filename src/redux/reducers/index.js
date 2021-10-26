import { combineReducers } from "redux";
import { CarouselReducer } from "./CarouselReducer";
import { QuanLyPhimReducer } from "./QuanLyPhimReducer";
import { QuanLyRapReducer } from "./QuanLyRapReducer";
import { reducerUpdateFilm } from "../../containers/AdminTemplate/Edit/component/reducerUpdate";
import { reducerAddNew } from "../../containers/AdminTemplate/AddFilmPage/_component/reducerAddNew";
import { reducerRenderFilm } from "../../containers/AdminTemplate/FilmManagementPage/_Component/reducer";

const rootReducer = combineReducers({
    CarouselReducer,
    QuanLyPhimReducer,
    QuanLyRapReducer,
    reducerRenderFilm,
    reducerAddNew,
    reducerUpdateFilm
});

export default rootReducer;
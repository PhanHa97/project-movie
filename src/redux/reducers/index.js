import { combineReducers } from "redux";
import { reducerAddNew } from "../../containers/AdminTemplate/AddFilmPage/_component/reducerAddNew";
import { reducerRenderFilm } from "../../containers/AdminTemplate/FilmManagementPage/_Component/reducer";
const rootReducer = combineReducers({
    reducerRenderFilm,
    reducerAddNew
});

export default rootReducer;
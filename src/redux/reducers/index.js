import { combineReducers } from "redux";
import { reducerUpdateFilm } from "../../containers/AdminTemplate/Edit/component/reducerUpdate";
import { reducerAddNew } from "../../containers/AdminTemplate/AddFilmPage/_component/reducerAddNew";
import { reducerRenderFilm } from "../../containers/AdminTemplate/FilmManagementPage/_Component/reducer";
const rootReducer = combineReducers({
    reducerRenderFilm,
    reducerAddNew,
    reducerUpdateFilm
});

export default rootReducer;
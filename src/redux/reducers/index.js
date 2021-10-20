import { combineReducers } from "redux";
import { reducerRenderFilm } from "../../containers/AdminTemplate/FilmManagementPage/_Component/reducer";
const rootReducer = combineReducers({
    reducerRenderFilm,
});

export default rootReducer;
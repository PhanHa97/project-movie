import { combineReducers } from "redux";
import { CarouselReducer } from "./CarouselReducer";
import { QuanLyPhimReducer } from "./QuanLyPhimReducer";
import { QuanLyRapReducer } from "./QuanLyRapReducer";

const rootReducer = combineReducers({
    CarouselReducer,
    QuanLyPhimReducer,
     QuanLyRapReducer,
});

export default rootReducer;
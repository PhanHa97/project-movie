import { combineReducers } from "redux";
import { CarouselReducer } from "./CarouselReducer";
import { QuanLyPhimReducer } from "./QuanLyPhimReducer";

const rootReducer = combineReducers({
    CarouselReducer,
    QuanLyPhimReducer,
});

export default rootReducer;
import { SET_HE_THONG_RAP_CHIEU } from "../actions/types/QuanLyRapType"
import LayThongTinLichChieuHeThongRap from "./data/LayThongTinLichChieuHeThongRap.json"

const stateDefault ={ 
    heThongRapChieu: LayThongTinLichChieuHeThongRap,
}

export const QuanLyRapReducer = (state = stateDefault,action) => {
    switch (action.type) {
        case SET_HE_THONG_RAP_CHIEU: {
            state.heThongRapChieu = action.heThongRapChieu;
            return{...state}
        }

        default:
            return {...state}
    }
}
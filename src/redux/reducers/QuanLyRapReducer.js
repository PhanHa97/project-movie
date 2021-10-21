import { SET_HE_THONG_RAP_CHIEU } from "../actions/types/QuanLyRapType"
import layThongTinHeThongRap from "./data/layThongTinHeThongRap.json"

const stateDefault ={ 
    heThongRapChieu: layThongTinHeThongRap,
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
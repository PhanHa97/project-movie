import * as ActionType from "./constants"
import api from "../../utils"



export const fetchUpdateFilm = (id) => {
    return (dispatch) => {
        dispatch(actUpdateRequest())
        api.get(`QuanLyPhim/LayThongTinPhim?MaPhim=${id}`)
            .then((result) => {
                dispatch(actUpdateSuccess(result.data.content))
                console.log(result.data.content)
            }).catch((error) => {
                dispatch(actUpdateError(error))
            })
    }
}


const actUpdateRequest = () => {
    return {
        type: ActionType.UpdateFilmRequest
    }
}

const actUpdateSuccess = (data) => {
    return {
        type: ActionType.UpdateFilmSuccess,
        payload: data
    }
}
const actUpdateError = (error) => {
    return {
        type: ActionType.UpdateFilmError,
        payload: error
    }
}
import { filmError, filmSuccess, filmRequest } from "./constants"
import api from "../../utils"



export const fetchDataFilm = () => {
    return (dispatch) => {
        dispatch(actFilmRequest())
        api.get("QuanLyPhim/LayDanhSachPhim?maNhom=GP01")
            .then((result) => {
                dispatch(actFilmSuccess(result.data.content))

            }).catch((error) => {
                dispatch(actFilmError(error))
            })
    }
}


const actFilmRequest = () => {
    return {
        type: filmRequest
    }
}

const actFilmSuccess = (data) => {
    return {
        type: filmSuccess,
        payload: data
    }
}
const actFilmError = (error) => {
    return {
        type: filmError,
        payload: error
    }
}
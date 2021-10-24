import * as ActionType from "./constant"
import api from "../../utils"


export const fetchData = (formData) => {
    return (dispatch) => {
        dispatch(actAddNewRequest())
        api.post("QuanLyPhim/ThemPhimUploadHinh", formData).then((result) => {
            dispatch(actAddNewSuccess(result.data))
        }).catch((error) => {
            dispatch(actAddNewError(error))
        })
    }
}

const actAddNewRequest = () => {
    return {
        type: ActionType.AddNewRequest
    }
}
const actAddNewSuccess = (data) => {
    return {
        type: ActionType.AddNewSuccess,
        payload: data
    }
}
const actAddNewError = (error) => {
    return {
        type: ActionType.AddNewError,
        payload: error
    }
}
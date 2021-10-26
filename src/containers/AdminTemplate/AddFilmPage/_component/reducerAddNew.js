import * as ActionType from "./constant"


const inititalState = {
    loading: true,
    data: null,
    error: null
}

export const reducerAddNew = (state = inititalState, action) => {
    switch (action.type) {
        case ActionType.AddNewRequest:
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state }
        case ActionType.AddNewSuccess:
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return { ...state }
        case ActionType.AddNewError:
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state }
        default: return { ...state }
    }

}
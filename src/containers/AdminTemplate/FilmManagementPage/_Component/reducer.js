import * as ActionType from "./constants"


const inititalState = {
    loading: true,
    data: null,
    error: null
}

export const reducerRenderFilm = (state = inititalState, action) => {
    switch (action.type) {
        case ActionType.filmRequest:
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state }
        case ActionType.filmSuccess:
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return { ...state }
        case ActionType.filmError:
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state }
        default: return { ...state }
    }

}
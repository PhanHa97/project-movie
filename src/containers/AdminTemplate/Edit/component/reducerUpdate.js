
import * as ActionType from "./constants"


const inititalState = {
    loading: true,
    data: null,
    error: null
}

export const reducerUpdateFilm = (state = inititalState, action) => {
    switch (action.type) {
        case ActionType.UpdateFilmRequest:
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state }
        case ActionType.UpdateFilmSuccess:
            state.loading = false;
            state.data = action.payload;

            state.error = null;
            return { ...state }
        case ActionType.UpdateFilmError:
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state }
        default: return { ...state }
    }

}
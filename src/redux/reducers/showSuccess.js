import { SHOW_SUCCESS } from "../actions/types"

const showSuccess = (state = false, { type }) => {
    switch (type) {
        case SHOW_SUCCESS:
            return !state

        default: return state
    }
}

export default showSuccess
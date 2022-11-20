import { SET_RATING, SET_HOVER } from '../actions/types'

const initialState = {
    rating: 0,
    hover: 0
}
const rating = (state = initialState, { type, value }) => {
    switch (type) {
        case SET_RATING:
            return {...state, rating: value}
        case SET_HOVER:
            return {...state, hover: value}
        default:
            return state
    }
}


export default rating
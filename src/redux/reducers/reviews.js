import {SHOW_REVIEWS} from '../actions/types'

const initialState = false

const reviews = (state = initialState, { type }) => type
    === SHOW_REVIEWS
    ? !state
    : state


export default reviews
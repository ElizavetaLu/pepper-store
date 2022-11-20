import {OPEN_CLOSE_CHAT} from '../actions/types'

const initialState = false

const chat = (state = initialState, { type }) => type
    === OPEN_CLOSE_CHAT
    ? !state
    : state


export default chat
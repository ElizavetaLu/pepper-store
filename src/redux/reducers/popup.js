import { SHOW_POPUP } from "../actions/types"

const initialSate = false

const popup = (state = initialSate, { type }) => type
    === SHOW_POPUP
    ? !state
    : state

export default popup
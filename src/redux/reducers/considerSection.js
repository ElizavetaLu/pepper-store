import { SELECT_SECTION } from '../actions/types'

const initialState = 'new'

const considerSection = (state = initialState, { type, name }) => type
    === SELECT_SECTION
    ? state = name
    : state


export default considerSection
import { SET_PRODUCT_DATA } from "../actions/types"

const initialSate = {}

const setSelectedProductData = (state = initialSate, { type, payload }) => type
    === SET_PRODUCT_DATA
    ? state = payload
    : state

export default setSelectedProductData
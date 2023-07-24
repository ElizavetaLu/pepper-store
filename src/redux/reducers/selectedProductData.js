import { SET_PRODUCT_DATA } from "../actions/types"

const initialSate = {
    selectedProductData: null
}

const selectedProductData = (state = initialSate, { type, payload }) => {

    switch (type) {
        case SET_PRODUCT_DATA:
            return { ...state, selectedProductData: payload }

        default:
            return state;
    }
}

export default selectedProductData
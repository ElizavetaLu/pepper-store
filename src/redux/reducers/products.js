import {
    GET_MOST_POPULAR,
    GET_ON_SALE,
    GET_PRODUCTS,
    GET_NEW,
    GET_HOT,
    GET_FAST_GROW,
} from "../actions/types"



const initialState = {
    categories: ['Sweet Peppers', 'Hottest Peppers', 'Green Chiles', 'Hot Peppers'],
    mostPopular: [],
    onSale: [],
    fastGrow: [],
    new: [],
    products: [],
    hot: [],
}


const products = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_MOST_POPULAR: return { ...state, mostPopular: payload };

        case GET_ON_SALE: return { ...state, onSale: payload };

        case GET_NEW: return { ...state, new: payload };

        case GET_HOT: return { ...state, hot: payload };

        case GET_PRODUCTS: return { ...state, products: payload };

        case GET_FAST_GROW: return { ...state, fastGrow: payload };

        default: return state;
    }
}

export default products

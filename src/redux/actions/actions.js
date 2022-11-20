import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    INCREMENT_IN_CART,
    DECREMENT_IN_CART,
    GET_MOST_POPULAR,
    GET_SEEDS,
    GET_ON_SALE,
    GET_NEW,
    GET_PRODUCTS,
    GET_FAST_GROW,
    GET_HOT,
    SHOW_POPUP,
    SET_PRODUCT_DATA,
    OPEN_CLOSE_CHAT,
    ON_HAND_CHANGE_IN_CART,
    SHOW_REVIEWS,
    SELECT_SECTION,
    SET_RATING,
    SET_HOVER
} from "./types"




export const addToCart = (allData, value = 1) => ({
    type: ADD_TO_CART,
    allData,
    value
})
export const removeFromCart = name => ({ type: REMOVE_FROM_CART, name })
export const incrementInCart = name => ({ type: INCREMENT_IN_CART, name })
export const decrementInCart = name => ({ type: DECREMENT_IN_CART, name })
export const onHandChangeInCart = (value, name) => ({
    type: ON_HAND_CHANGE_IN_CART,
    value,
    name
})





export const getProducts = (products) => ({
    type: GET_PRODUCTS,
    payload: products,
})

export const getHot = (products) => ({
    type: GET_HOT,
    payload: products,
})

export const getMostPopular = (products) => ({
    type: GET_MOST_POPULAR,
    payload: products,
})
export const getOnSale = (products) => ({
    type: GET_ON_SALE,
    payload: products,
})

export const getNew = (products) => ({
    type: GET_NEW,
    payload: products,
})
export const getFastGrow = (products) => ({
    type: GET_FAST_GROW,
    payload: products,
})


export const showPopup = () => ({ type: SHOW_POPUP })
export const setProductData = productData => ({
    type: SET_PRODUCT_DATA,
    payload: { ...productData }
})


export const openCloseChat = () => ({ type: OPEN_CLOSE_CHAT })
export const openCloseReviews = () => ({ type: SHOW_REVIEWS })


export const selectSection = name => ({ type: SELECT_SECTION, name })


export const setRating = value => ({ type: SET_RATING, value })
export const setHover = value => ({ type: SET_HOVER, value })
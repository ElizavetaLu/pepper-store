import cart from "./cart";
import popup from "./popup";
import setSelectedProductData from "./setSelectedProductData";
import chat from "./chat";
import { combineReducers } from "redux";
import products from "./products";
import reviews from "./reviews";
import considerSection from "./considerSection";
import rating from "./rating";

const allReducers = combineReducers({
    cart,
    products,
    popup,
    setSelectedProductData,
    chat,
    reviews,
    considerSection,
    rating
})

export default allReducers


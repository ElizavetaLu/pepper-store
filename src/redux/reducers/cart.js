import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    INCREMENT_IN_CART,
    DECREMENT_IN_CART,
    ON_HAND_CHANGE_IN_CART,
    CLEAN_UP_CART
} from "../actions/types"

const initialState = []


const cart = (state = initialState, { type, allData, value, name }) => {
    switch (type) {
        case ADD_TO_CART: {
            const exist = state.find(elem => elem.namerow === allData.namerow);

            if (exist) {
                return state.map((element =>
                    element.namerow === allData.namerow
                        ? {
                            ...exist,
                            qty: exist.qty + value || 1,
                        }
                        : element
                ))
            } else return [...state, { ...allData, qty: value }]
        }

        case INCREMENT_IN_CART: {
            const item = state.find(elem => elem.namerow === name);
            item.qty = Number((item.qty + 0.1).toFixed(2))

            return [...state]
        }

        case DECREMENT_IN_CART: {
            const item = state.find(elem => elem.namerow === name);
            if (item.qty === 0) return [...state]

            item.qty = Number((item.qty - 0.1).toFixed(2))
            return [...state]
        }

        case ON_HAND_CHANGE_IN_CART: {
            const item = state.find(elem => elem.namerow === name);

            item.qty = Number(value)
            return state
        }

        case REMOVE_FROM_CART: return state.filter(elem => elem.namerow !== name)

        case CLEAN_UP_CART: return [];

        default: return state;
    }
}

export default cart

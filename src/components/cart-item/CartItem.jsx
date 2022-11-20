import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    incrementInCart,
    decrementInCart,
    removeFromCart,
    onHandChangeInCart,
    setProductData,
    showPopup
} from "../../redux/actions/actions"
import "./cartItem.scss"

const CartItem = (props) => {

    const cart = useSelector(state => state.cart)
    const qty = cart.find(item => item.namerow === props.namerow).qty

    const dispatch = useDispatch()

    return (

        <div className="item-in-cart" onClick={e => {

            dispatch(setProductData(props))
            dispatch(showPopup())
        }}>
            <div className="image">
                <img src={`https:${props.image.fields.file.url}`} alt="" />
            </div>

            <div className="delete" onClick={e => {
                e.stopPropagation()
                dispatch(removeFromCart(props.namerow))
            }} >+</div>

            <div className="column">
                <div className="row">
                    <div className="name">{props.namerow}</div>
                </div>




                <div className="row">

                    {props.onSale
                        ? <div className="row-price">
                            <div className="current-price">${props.salePrice}</div>
                            <div className="prev-price">${props.price}</div>
                        </div>
                        : <div className="row-price">
                            <div className="price">${props.price}</div>
                        </div>
                    }


                    <div className="qnt">
                        <div className="item" onClick={e => {
                            e.stopPropagation()
                            dispatch(decrementInCart(props.namerow))
                        }}>
                            <img src="/pepper-store/build//images/icons/minus.png" alt="" />
                        </div>
                        <input
                            type="number"
                            className="input"
                            value={qty}
                            onChange={e => {
                                e.stopPropagation()
                                dispatch(onHandChangeInCart(e.target.value, props.namerow))
                            }}
                            onClick={e => e.stopPropagation()}
                        />
                        <div className="item" onClick={e => {
                            e.stopPropagation()
                            dispatch(incrementInCart(props.namerow))
                        }}>
                            <img src="/pepper-store/build//images/icons/plus.png" alt="" />
                        </div>
                    </div>



                    <div className="total">Total: {props.onSale ? Number((qty * props.salePrice).toFixed(2)) : Number((qty * props.price).toFixed(2))}$</div>


                </div>
            </div>

        </div>

    )
}

export default CartItem
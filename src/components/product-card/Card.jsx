import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { 
    addToCart, 
    incrementOnCard, 
    decrementOnCard, 
    hendChangeOnCard,
    showPopup, 
    setProductData } from "../../redux/actions/actions";
import "./card.scss"

const Card = ({ name, newP, onSale, rate, image, price, salePrice, allData }) => {

    // const [value, setValue] = useState(1)
    const weigthQty = useSelector(state=> state.changeQuantityOnCard)


    const dispatch = useDispatch()

    return (
        <div className="product-card" onClick={() => {
            dispatch(setProductData(allData))
            dispatch(showPopup())
        }}>
            <div className="product-photo">

                {newP && <div className="new">
                    <div className="new-content">
                        <div className="triangle"></div>
                        <div className="text">new</div>
                    </div>
                </div>}

                {onSale && <div className="sale">
                    <div className="sale-content">
                        <div className="triangle"></div>
                        <div className="text">sale</div>
                    </div>
                </div>
                }
                <img src={`https:${image}`} alt="" />
            </div>

            <div className="product-description">
                <div className="product-data">
                    <div className="name" title={name} >{name}</div>
                    <div className="rate">
                        <div className="star">
                            <img src="/pepper-store/build//images/icons/star.png" alt="" />
                        </div>
                        <div className="number">{rate}</div>
                    </div>
                </div>

                <div className="price">

                    {onSale
                        ? <div className="sale-price">
                            <div className="current">${salePrice}</div>
                            <div className="previous">${price}</div>
                        </div>

                        : <div className="product-price">${price}</div>}
                    <div className="weigth">/ 1kg</div>
                </div>


                <div className="button">
                    <button className="btn" onClick={e => {
                        e.stopPropagation()
                        return dispatch(addToCart(allData, weigthQty,name))
                    }
                    }>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Card
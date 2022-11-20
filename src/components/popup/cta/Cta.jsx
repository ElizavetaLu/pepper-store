import React, { useState } from "react";
import { addToCart } from "../../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import "./cta.scss"

const Cta = () => {
    const dispatch = useDispatch()

    const [value, setValue] = useState(1)

    const product = useSelector(state => state.setSelectedProductData)

    return (
        <div className="cta">
            {product.onSale
                ?
                <div className="current-price">
                    <div className="sale-price">${product.salePrice}</div>
                    <div className="prev-price">${product.price}</div>
                </div>

                :
                <div className="current-price">
                    <div className="price">${product.price}</div>
                </div>
            }

            <div className="qty">
                <div className="item" onClick={() => {
                    if (!value) return
                    setValue(prev => Number((prev - 0.1).toFixed(2)))
                }}>
                    <img src="/pepper-store/build//images/icons/minus.png" alt="" />
                </div>

                <input
                    type="number"
                    className="input"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />

                <div className="item" onClick={() => setValue(prev => Number((prev + 0.1).toFixed(2)))}>
                    <img src="/pepper-store/build//images/icons/plus.png" alt="" />
                </div>
            </div>


            <div className="button" onClick={() => dispatch(addToCart(product, value))}>
                <button className="btn">Add To Cart</button>
            </div>

        </div>
    )
}

export default Cta



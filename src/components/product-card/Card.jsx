import { useDispatch, useSelector } from "react-redux";
import {
    addToCart,
    showPopup,
    setProductData
} from "../../redux/actions/actions";
import "./card.scss";
import Button from "../button/Button";
import ProductMarker from "../product-marker/ProductMarker";



const Card = ({ name, newP, onSale, rate, image, price, salePrice, allData }) => {

    const weigthQty = useSelector(state => state.changeQuantityOnCard)
    const dispatch = useDispatch();

    const onAddToCart = e => {
        e.stopPropagation();
        dispatch(addToCart(allData, weigthQty, name))
    }

    return (
        <div className="card" onClick={() => {
            dispatch(setProductData(allData));
            dispatch(showPopup());
        }}>
            <div className="photo-container">
                <div className="tags">
                    {newP && <ProductMarker text="new" newArrival />}
                    {onSale && <ProductMarker text="sale" sale />}
                </div>

                <img className="photo" src={`https:${image}`} alt="" />
            </div>

            <div className="data">
                <div className="price">
                    {
                        onSale
                            ? <div className="sale-price">
                                <div className="current">${salePrice}</div>
                                <div className="previous">${price}</div>
                            </div>
                            : <div className="current-price">${price}</div>
                    }
                    <div className="weight">/ 1kg</div>
                </div>

                <div className="name">{name}</div>

                <button className="button" onClick={onAddToCart}>
                    <img className="button-icon" src="/images/icons/white-plus.png" alt="" />
                </button>
            </div>
        </div>
    )
}

export default Card
import { useDispatch, useSelector } from "react-redux";
import {
    addToCart,
    showPopup,
    setProductData
} from "../../redux/actions/actions";
import ProductMarker from "../product-marker/ProductMarker";
import "./card.scss";



const Card = (productFullData) => {

    const { namerow, onSale, image, price, salePrice } = productFullData

    const weigthQty = useSelector(state => state.changeQuantityOnCard)
    const dispatch = useDispatch();

    const onAddToCart = e => {
        e.stopPropagation();
        dispatch(addToCart(productFullData, weigthQty, namerow))
    }

    return (
        <div className="card" onClick={() => {
            dispatch(setProductData(productFullData));
            dispatch(showPopup());
        }}>
            <div className="photo-container">
                <div className="tags">
                    {productFullData.new && <ProductMarker text="new" newArrival />}
                    {onSale && <ProductMarker text="sale" sale />}
                </div>

                <img className="photo" src={`https:${image.fields.file.url}`} alt="" />
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

                <div className="name">{namerow}</div>

                <button className="button" onClick={onAddToCart}>
                    <img className="button-icon" src="/images/icons/white-plus.png" alt="add to cart" title="add to cart" />
                </button>
            </div>
        </div>
    )
}

export default Card
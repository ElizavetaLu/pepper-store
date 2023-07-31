import { useDispatch, useSelector } from "react-redux";
import {
    incrementInCart,
    decrementInCart,
    removeFromCart,
    onHandChangeInCart
} from "../../redux/actions/actions";
import "./cartItem.scss";


const CartItem = (props) => {

    const cart = useSelector(state => state.cart);
    const qty = cart.find(item => item.namerow === props.namerow).qty;

    const dispatch = useDispatch();

    return (
        <div className="cart-item">
            <div className="item-image-container">
                <img className="item-image" src={`https:${props.image.fields?.file.url}`} alt="" />
            </div>

            <div className="item-data">
                <div className="item-information">
                    <p className="item-name">{props.namerow}</p>
                    <div className="row">
                        <span className="text">Price for 1 kg: </span>
                        <span className="total-amount">0</span>
                    </div>
                    <div className="total">
                        <span className="text">Total: </span>
                        <span className="total-amount">0</span>
                    </div>
                </div>

                <div className="right">
                    <div className="item-qty">

                        <button className="count-item" onClick={e => {
                            e.stopPropagation()
                            dispatch(incrementInCart(props.namerow))
                        }}>
                            <img className="count-icon" src="/pepper-store/build//images/icons/plus.png" alt="" />
                        </button>

                        <input
                            type="number"
                            className="qty-input"
                            value={qty}
                            onChange={e => {
                                e.stopPropagation() 
                                dispatch(onHandChangeInCart(e.target.value, props.namerow))
                            }}
                        />

                        <button className="count-item" onClick={e => {
                            e.stopPropagation() 
                            dispatch(decrementInCart(props.namerow))
                        }}>
                            <img className="count-icon" src="/pepper-store/build//images/icons/minus.png" alt="" />
                        </button>
                    </div>
                    <button
                        className="delete"
                        onClick={e => {
                            e.stopPropagation();
                            dispatch(removeFromCart(props.namerow));
                        }}
                    >
                        <img className="delete-icon" src="/pepper-store/build//images/icons/delete.png" alt="" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CartItem
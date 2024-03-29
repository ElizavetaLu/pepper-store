import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cleanUpCart } from "../../redux/actions/actions";
import CartItem from "../cart-item/CartItem";
import HeaderLink from "./link/HeaderLink";
import "./header.scss";


const defaultOffset = 200;
let lastScroll = 0;
const scrollPosition = () => window.scrollY || document.documentElement.scrollTop;


const Header = () => {

    const [isHide, setIsHide] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {

            if (scrollPosition() > lastScroll
                && !isHide
                && scrollPosition() > defaultOffset
            ) {
                lastScroll = scrollPosition()
                setIsHide(true)
            } else if (scrollPosition() < lastScroll && isHide) {
                lastScroll = scrollPosition()
                setIsHide(false)
            }
        })

    }, [isHide])


    const dispatch = useDispatch()

    const categories = useSelector(state => state.products.categories)
    const cartItems = useSelector(state => state.cart)

    const totals = cartItems.length !== 0 ? cartItems.map(item => {
        const amount = item.onSale
            ? Number((item.qty * item.salePrice).toFixed(2))
            : Number((item.qty * item.price).toFixed(2))

        return amount
    }) : []

    return (
        <div className={isHide ? "header hide" : "header"}>
            <div className="header-container">
                <Link to="/pepper-store/build/" className="logo-link">
                    <img className="logo" src="/pepper-store/build//images/icons/logo.png" alt="" />
                </Link>
                <div className="categories">
                    {
                        categories &&
                        categories.map(category => <HeaderLink key={category} name={category} />)
                    }
                </div>
                <div className="comp-info">
                    <HeaderLink name="About Us" />
                    <HeaderLink name="Contacts" />
                </div>
                <div className="header-items">
                    <img className="profile-icon" src="/pepper-store/build//images/icons/profile.png" alt="Profile" />
                    <div className="header-item">
                        <input type="checkbox" id="side-checkbox" />

                        <div className={`side-panel ${isHide && 'hide'}`}>
                            <div className="cart-container">
                                <label className="close-container" htmlFor="side-checkbox">
                                    <img className="close" src="/pepper-store/build//images/icons/plus.png" alt="" />
                                </label>

                                {
                                    cartItems.length === 0
                                        ? <div className="dummy">Your cart is empty...</div>
                                        : <div className="side-title">Products amount: {cartItems.length}</div>
                                }

                                <div className={`cart-items ${isHide && 'hide'}`}>
                                    {
                                        cartItems &&
                                        cartItems.map(item => <CartItem key={item.namerow} {...item} />)
                                    }
                                </div>
                            </div>

                            <div className="total-cost">
                                <div className="total">Total cost: ${Number((totals.reduce((prev, cur) => prev + cur, 0)).toFixed(2))}</div>

                                <button className="checkout-button" onClick={() => {
                                    dispatch(cleanUpCart())
                                }}>
                                    To Check Out
                                </button>
                            </div>
                        </div>

                        <div className="side-button-1-wr">
                            <label className="side-button-1" htmlFor="side-checkbox">
                                <div className="side-b side-open">
                                    <img className="cart" src="/pepper-store/build//images/icons/cart-icon.png" alt="Cart" />
                                </div>
                                <div className="side-b side-close">
                                    <img className="cart" src="/pepper-store/build//images/icons/cart-icon.png" alt="Cart" />
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
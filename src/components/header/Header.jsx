import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cleanUpCart } from "../../redux/actions/actions";
import CartItem from "../cart-item/CartItem";
import HeaderLink from "./link/HeaderLink";
import "./header.scss";

const defaultOffset = 200;
let lastScroll = 0;
const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;

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
            <Link to={`/pepper-store/build/`}>
                <div className="logo">
                    <img src="/pepper-store/build//images/icons/bell-pepper.png" alt="" />
                </div>
            </Link>
            <div className="categories">

                {categories &&
                    categories.map(category => (<HeaderLink key={category} name={category} />))}

            </div>

            <div className="comp-info">
                <div className="more-info">About Us</div>
                <div className="more-info">Contacts</div>
            </div>

            <div className="header-items">
                <div className="header-item">
                    <div className="name">Profile</div>
                    <div className="profile">
                        <img src="/pepper-store/build//images/icons/profile.png" alt="Profile" />
                    </div>
                </div>

                <div className="header-item">

                    <input type="checkbox" id="side-checkbox" />
                    <div className="side-panel" style={{ height: isHide ? "100vh" : "calc((100vh - 74.5px))" }}>
                        <label className="side-button-2" htmlFor="side-checkbox">+</label>
                        {cartItems.length === 0
                            ? <div className="side-title">Your cart is empty...</div>
                            : <div className="side-title">Products amount: {cartItems.length}</div>
                        }

                        <div className="cart-items">
                            {cartItems &&
                                cartItems.map(item => (<CartItem
                                    key={item.namerow}
                                    {...item}
                                />))}
                        </div>

                        <div className="total-cost">
                            <div className="total">Total cost: ${Number((totals.reduce((prev, cur) => prev + cur, 0)).toFixed(2))}</div>
                            <div className="button">
                                <button className="btn" onClick={() => {
                                    dispatch(cleanUpCart())
                                }}>To Check Out</button>
                            </div>
                        </div>

                    </div>
                    <div className="side-button-1-wr">
                        <label className="side-button-1" htmlFor="side-checkbox">
                            <div className="side-b side-open">
                                <div className="name">Cart</div>
                                <div className="cart">
                                    <img src="/pepper-store/build//images/icons/cart-icon.png" alt="Cart" />
                                </div>
                            </div>

                            <div className="side-b side-close">
                                <div className="name">Cart</div>
                                <div className="cart">
                                    <img src="/pepper-store/build//images/icons/cart-icon.png" alt="Cart" />
                                </div>
                            </div>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
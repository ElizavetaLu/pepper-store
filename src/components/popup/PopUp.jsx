import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showPopup, openCloseReviews, setHover, setRating, addToCart } from "../../redux/actions/actions";
import ReviewSection from "./all-review-components/review-section/ReviewSection";
import Details from "./details/Details";
import './popup.scss';


const sections = ['description', 'details', 'reviews']

const PopUp = ({ isActive }) => {


    const closeModal = () => {
        dispatch(setHover(0));
        dispatch(setRating(0));
        setFormValue('');
        if (reviewsPanel) dispatch(openCloseReviews());
        dispatch(showPopup());
    }

    const onAddToCart = () => {
        if (!value) return;
        dispatch(addToCart(product, value));
        setValue(1);
        closeModal();
    }

    const [activeSection, setActiveSection] = useState('description');
    const [value, setValue] = useState(1)


    //review form
    const [formValue, setFormValue] = useState('');


    const dispatch = useDispatch();

    const product = useSelector(state => state.setSelectedProductData);

    const reviewsPanel = useSelector(state => state.reviews);

    const currentPrice = product.onSale ? product.salePrice : product.price;


    return (
        <div className={isActive ? "modal active" : "modal"} onClick={closeModal}>
            {Object.keys(product).length === 0
                ? null
                :
                <div className="modal-content" onClick={e => {
                    if (reviewsPanel) dispatch(openCloseReviews())
                    e.stopPropagation()
                }}>

                    <div className="background"></div>

                    <button className="close-button" onClick={closeModal}>
                        <img className="close-icon" src="/images/icons/white-plus.png" alt="" />
                    </button>

                    <div className="photo-container">
                        <img
                            className="product-photo"
                            src={`https:${product.image.fields.file.url}`}
                            alt=""
                        />
                    </div>

                    <div className="data">
                        <div className="main-information">
                            <div className="name">{product.namerow}</div>

                            <div className="main-cta">

                                <div className="cta-block">
                                    <p className="title">Price</p>
                                    <div className="cta-block-data">
                                        <div className="price">
                                            {
                                                product.onSale
                                                    ? <div className="sale-price">
                                                        <div className="current">${product.salePrice}</div>
                                                        <div className="previous">${product.price}</div>
                                                    </div>
                                                    : <div className="current-price">${product.price}</div>
                                            }
                                            <div className="weight">/ 1kg</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="cta-block">
                                    <p className="title">Quantity</p>
                                    <div className="cta-block-data qty">
                                        <button className="item" onClick={e => {
                                            if (!value) return
                                            setValue(prev => Number((prev - 0.1).toFixed(2)))
                                        }}>
                                            <img className="item-icon" src="/images/icons/white-minus.png" alt="" />
                                        </button>

                                        <input
                                            type="number"
                                            className="qty-input"
                                            max={3}
                                            value={value}
                                            onChange={e => setValue(e.target.value)}
                                        />

                                        <button className="item" onClick={() => setValue(prev => Number((prev + 0.1).toFixed(2)))}>
                                            <img className="item-icon" src="/images/icons/white-plus.png" alt="" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="nav-buttons">
                                {
                                    sections.map(section => {
                                        return (
                                            <button
                                                key={section}
                                                className={`nav-button ${section === activeSection && 'active'}`}
                                                onClick={() => setActiveSection(section)}>{section}</button>
                                        )
                                    })
                                }

                            </div>

                            {
                                activeSection === 'description'
                                    ? <p className="description">{product.description}</p>

                                    : activeSection === 'details'
                                        ? <Details />

                                        : activeSection === 'reviews'
                                            ? <ReviewSection
                                                value={formValue}
                                                setValue={setFormValue}
                                                product={product.namerow}
                                            />
                                            : null
                            }
                        </div>

                        <div className="total">
                            <div className="count-total">
                                <span className="title">Total:</span>
                                <span className="amount">{(value * currentPrice).toFixed(2)} $</span>
                            </div>

                            <button className="add-button" onClick={onAddToCart}  >Add to Cart</button>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default PopUp



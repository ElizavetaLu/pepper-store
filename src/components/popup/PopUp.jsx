import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showPopup, openCloseReviews, setHover, setRating, addToCart } from "../../redux/actions/actions";
import ReviewSection from "./all-review-components/review-section/ReviewSection";
import ProductMarker from "../product-marker/ProductMarker";
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
        dispatch(addToCart(selectedProductData, value));
        setValue(1);
        closeModal();
    }

    const [activeSection, setActiveSection] = useState('description');
    const [value, setValue] = useState(1)


    //review form
    const [formValue, setFormValue] = useState('');


    const dispatch = useDispatch();

    const { selectedProductData } = useSelector(state => state.selectedProductData);

    const reviewsPanel = useSelector(state => state.reviews);

    if (!selectedProductData) return

    const currentPrice = selectedProductData.onSale ? selectedProductData.salePrice : selectedProductData.price;
    
    return (
        <div className={isActive ? "modal active" : "modal"} onClick={closeModal}>
            {selectedProductData &&
                <div className="modal-content" onClick={e => {
                    if (reviewsPanel) dispatch(openCloseReviews())
                    e.stopPropagation()
                }}>

                    <div className="tags">
                        {
                            selectedProductData.onSale && <ProductMarker text="sale" sale />
                        }
                        {
                            selectedProductData.new && <ProductMarker text="new" newArrival />
                        }
                    </div>

                    <div className="background"></div>

                    <button className="close-button" onClick={closeModal}>
                        <img className="close-icon" src="/images/icons/white-plus.png" alt="" />
                    </button>

                    <div className="photo-container">
                        <img
                            className="product-photo"
                            src={`https:${selectedProductData.image.fields.file.url}`}
                            alt=""
                        />
                    </div>

                    <div className="data">
                        <div className="main-information">
                            <div className="name">{selectedProductData.namerow}</div>

                            <div className="main-cta">

                                <div className="cta-block">
                                    <p className="title">Price</p>
                                    <div className="cta-block-data">
                                        <div className="price">
                                            {
                                                selectedProductData.onSale
                                                    ? <div className="sale-price">
                                                        <div className="current">${selectedProductData.salePrice}</div>
                                                        <div className="previous">${selectedProductData.price}</div>
                                                    </div>
                                                    : <div className="current-price">${selectedProductData.price}</div>
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
                                    ? <p className="description">{selectedProductData.description}</p>

                                    : activeSection === 'details'
                                        ? <Details />

                                        : activeSection === 'reviews'
                                            ? <ReviewSection
                                                value={formValue}
                                                setValue={setFormValue}
                                                product={selectedProductData.namerow}
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



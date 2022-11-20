import React, { useState } from "react";
import './popup.scss';
import { showPopup, openCloseReviews, setHover, setRating } from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { useAuthState } from 'react-firebase-hooks/auth';
import firebase from 'firebase/compat/app';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import ReviewForm from "./all-review-components/review-form/ReviewForm";
import Cta from "./cta/Cta";
import { firestore, auth } from "../../firebase/firebase"
import ReviewRowWithPanel from "./all-review-components/review-row-panel/ReviewRowWithPanel";


const PopUp = ({ isActive }) => {

    const [user] = useAuthState(auth);
    const reviewsRef = firestore.collection('reviews');
    const query = reviewsRef.orderBy('createdAt');


    const [reviews] = useCollectionData(query);

    const [formValue, setFormValue] = useState('')
    const rating = useSelector(state => state.rating)

    const sendReview = async (e) => {
        // if (e && e.preventDefault) e.preventDefault()
        e.preventDefault()
        const { uid } = auth.currentUser;

        await reviewsRef.add({
            product: product.namerow,
            text: formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            rating
        })

        setFormValue('');
    }


    const dispatch = useDispatch()

    const product = useSelector(state => state.setSelectedProductData)
    const reviewsPanel = useSelector(state => state.reviews)


    const currentProductReview = reviews && auth.currentUser ? reviews.filter(item => item.product === product.namerow) : null


    return (
        <div className={isActive ? "modal active" : "modal"} onClick={() => {
            dispatch(setHover(0))
            dispatch(setRating(0))
            if (reviewsPanel) dispatch(openCloseReviews())
            dispatch(showPopup())
        }}>
            {Object.keys(product).length === 0
                ? null
                :
                <div className="modal-content" onClick={e => {
                    if (reviewsPanel) dispatch(openCloseReviews())
                    e.stopPropagation()
                }}>
                    <div className="close" onClick={() => {
                        dispatch(setHover(0))
                        dispatch(setRating(0))
                        dispatch(showPopup())
                    }
                    }>+</div>

                    {product.new &&
                        <div className="status-icon-new">
                            <div className="status-container-new">
                                <div className="text-new">new</div>
                                <div className="triangle-new"></div>
                            </div>
                        </div>
                    }

                    {product.onSale &&
                        <div className="status-icon-sale">
                            <div className="status-container-sale">
                                <div className="triangle-sale"></div>
                                <div className="text-sale">sale</div>
                            </div>
                        </div>
                    }

                    <div className="product-photo">
                        <img src={`https:${product.image.fields.file.url}`} alt="" />
                    </div>



                    <div className="product-data-container">
                        <div className="product-categories">{product.categories.map(item => (<span key={item.sys.id}>{item.sys.id} | </span>))}</div>

                        <div className="product-name">{product.namerow}</div>

                        <div className="rate-reviews">
                            <div className="rate">
                                <div className="number">{product.rate}</div>
                                <div className="star">
                                    <img src="/pepper-store/build//images/icons/star.png" alt="" />
                                </div>
                            </div>


                            {currentProductReview &&
                                <ReviewRowWithPanel
                                    currentProductReview={currentProductReview}
                                    reviewsPanel={reviewsPanel}
                                    auth={auth} />
                            }

                        </div>

                        <div className="description"> <span className="tittle">Description:</span> {product.description} </div>
                        <div className="data-row"><span className="title">HeatLevel:</span>{product.heatLevel} </div>
                        <div className="data-row"><span className="title">Scoville:</span> {product.scoville} </div>
                        <Cta />

                        <ReviewForm formValue={formValue} setFormValue={setFormValue} sendReview={sendReview} />
                    </div>
                </div>
            }
        </div>
    )
}

export default PopUp



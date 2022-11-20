import React from "react";
import { useDispatch } from "react-redux";
import { openCloseReviews } from "../../../../redux/actions/actions";
import SingleReview from "../single-review/SingleReview";

const ReviewRowWithPanel = ({ currentProductReview, reviewsPanel, auth }) => {

const dispatch = useDispatch()

    return (
        <div className="reviews" onClick={() => dispatch(openCloseReviews())}>
            <div className="amount">{currentProductReview.length}</div>
            <div className="text">reviews</div>
            {reviewsPanel &&
                <div className="reviews-panel-container">
                    <div className="reviews-panel">
                        <div className="panel-name">Reviews: </div>
                        {currentProductReview.length === 0 ? <span className="dumb">There's no reviews yet...</span> : null}
                        <div className="all-reviews">
                            {currentProductReview.map((review, indx) => (
                                <SingleReview
                                    key={indx}
                                    review={review.text}
                                    rating={review.rating}
                                    auth={auth}
                                    time={review.createdAt ? new Date(review.createdAt.seconds * 1000).toString() : '--:--'}
                                />
                            ))
                            }
                        </div>
                    </div>
                </div>
            }
        </div>

    )
}

export default ReviewRowWithPanel



import React from "react";
import "./review.scss"

const SingleReview = ({ review, time, rating }) => {
console.log(rating)
    return (
        <div className="review-wrapper">
            <div className="review-container">
                <div className="customer-info">
                    <div className="customer">
                        <div className="customer-avatar">
                            <img src="/pepper-store/build//images/icons/profile-user.png" alt="" />
                        </div>
                        <div className="customer-name">
                            <div className="text">Customer Name</div>
                            <div className="date">{time.slice(0, 24)}</div>
                        </div>
                    </div>
                    {rating && <div className="customer-rate">
                        <div className="number">{rating}</div>
                        <div className="star">
                            <img src="/pepper-store/build//images/icons/star.png" alt="" />
                        </div>
                    </div>}
                </div>
                <div className="review-text">{review}</div>
            </div>
        </div>
    )
}

export default SingleReview
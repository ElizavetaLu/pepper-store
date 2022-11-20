import React from "react";
import Rating from "../rating/Rating";
import "./reviewForm.scss"

const ReviewForm = ({ formValue, setFormValue, sendReview }) => {

    return (
        <div className="leave-review">
            <Rating />

            <form className="review-form" onSubmit={e => sendReview(e)}>
                <input
                    type="text"
                    placeholder="Leave a review..."
                    className="review-input"
                    value={formValue}
                    onChange={e => setFormValue(e.target.value)}
                />
                <button className="btn" disabled={formValue ? false : true}>Send</button>
            </form>
        </div>
    )
}

export default ReviewForm
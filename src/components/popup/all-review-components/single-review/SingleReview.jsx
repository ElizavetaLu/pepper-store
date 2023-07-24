import React from "react";
import "./review.scss";

const SingleReview = ({ review, creationTime, rating }) => {

    const date = new Date(creationTime.seconds * 1000)

    const getDate = () => {
        const hoursRow = date.getHours();
        const hours = hoursRow.toString().length === 1 ? '0' + hoursRow : hoursRow;
        
        const minutesRow = date.getMinutes(); 
        const minutes = minutesRow.toString().length === 1 ? '0' + minutesRow : minutesRow;


        const day = date.getDate();

        const monthRow = date.getMonth() + 1; 
        const month = monthRow.toString().length === 1 ? '0' + monthRow : monthRow;

        const year = date.getFullYear();

        return `${hours}:${minutes}, ${day}.${month}.${year}`
    }

    return (
        <div className="review-card">
            <div className="avatar">
                <img className="avatar-img" src="/images/icons/user-avatar.png" alt="avatar" />
            </div>

            <div className="review-data">
                <div className="row">
                    <div className="user-name">Customer Name</div>
                    <div className="date">{getDate()}</div>
                </div>
                <div className="rating">
                    {
                        [...Array(rating)].map((_, indx) => {
                            return (
                                <img key={indx} className="star" src="/images/icons/star.png" alt="star" />
                            )
                        })
                    }
                </div>
                <div className="review-text">{review}</div>
            </div>
        </div>
    )
}

export default SingleReview
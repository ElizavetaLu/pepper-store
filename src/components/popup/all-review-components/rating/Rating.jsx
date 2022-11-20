import React, { useState } from "react";
import "./rating.scss"

const Rating = () => {

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);


    return (
        <div className="star-rating">
            {[...Array(5)].map((star, indx) => {
                indx += 1;
                return (
                    <div
                        className="star-container"
                        key={indx}
                        onClick={() => setRating(indx)}
                        onMouseEnter={() => setHover(indx)}
                        onMouseLeave={() => setHover(rating)}
                    >
                        {indx <= (hover || rating)
                            ? <img src="/pepper-store/build//images/icons/star.png" alt="" className="selected" />
                            : <img src="/pepper-store/build//images/icons/empt-star.png" alt="" className="empty" />
                        }
                    </div>
                );
            })}
        </div>
    )
}

export default Rating

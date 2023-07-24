import React from "react";
import { setRating, setHover } from "../../../../redux/actions/actions"
import "./rating.scss"
import { useDispatch, useSelector } from "react-redux";

const Rating = () => {

    const rating = useSelector(state => state.rating.rating)
    const hover = useSelector(state => state.rating.hover)
    const dispatch = useDispatch()

    return (
        <div className="star-rating">
            {[...Array(5)].map((_, indx) => {
                indx += 1;
                return (
                    <div
                        className="star-container"
                        key={indx}
                        onClick={() => dispatch(setRating(indx))}
                        onMouseEnter={() => dispatch(setHover(indx))}
                        onMouseLeave={() => dispatch(setHover(rating))}
                    >
                        {indx <= (hover || rating)
                            ? <img src="/images/icons/star.png" alt="" className="selected" />
                            : <img src="/images/icons/empt-star.png" alt="" className="empty" />
                        }
                    </div>
                );
            })}
        </div>
    )
}

export default Rating

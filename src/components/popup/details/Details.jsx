import { useSelector } from "react-redux";
import "./details.scss";

const Details = () => {

    const { selectedProductData } = useSelector(state => state.selectedProductData);

    return (
        <div className="details">
            <div className="details-row">
                <span className="title">Rating:</span>
                <div className="rating">
                    <span className="number">{selectedProductData.rate}</span>
                    <img className="star" src="/images/icons/star.png" alt="" />
                </div>
            </div>

            <div className="details-row">
                <span className="title">HeatLevel:</span>
                <p className="text">{selectedProductData.heatLevel}</p>
            </div>
            <div className="details-row">
                <span className="title">Scoville:</span>
                <p className="text"> {selectedProductData.scoville}</p>
            </div>
            <div className="growing-instruction">
                <span className="title">Growing instruction:</span>
                <p className="text"> {selectedProductData.growingInstruction}</p>
            </div>
        </div>
    )
}

export default Details
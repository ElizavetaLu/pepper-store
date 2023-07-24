import Button from "../../../button/Button";
import "./block.scss";

const Block = ({ img, text, lg }) => {
    return (
        <div className={`image-block ${lg && 'large'}`}>
            <div className="image">
                <img className="bg-image" src={img} alt="" />
            </div>
            <div className="title">
                <div className="text">{text}</div>
                <div className="button-container">
                    <Button action={() => { }} text="VIEW" uppercase />
                </div>
            </div>
        </div>
    )
}

export default Block;
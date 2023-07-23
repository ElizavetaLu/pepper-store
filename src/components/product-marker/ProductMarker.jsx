import "./productMarker.scss";

const ProductMarker = ({ text, sale, newArrival }) => {

    const classname = sale ? 'sale' : newArrival ? 'new' : 'default'

    return (
        <div className={`product-marker ${classname}`}>
            <span className="product-marker-text">{text}</span>
        </div>
    )
}

export default ProductMarker
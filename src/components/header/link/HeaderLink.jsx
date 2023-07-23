import { Link } from "react-router-dom";
import "./headerLink.scss"

const HeaderLink = ({ name }) => {
    return (
        <Link to={`category/${name}`} className="category-item-link" state={name}>
            <span className="category-item">{name}</span>
        </Link>
    )
}

export default HeaderLink
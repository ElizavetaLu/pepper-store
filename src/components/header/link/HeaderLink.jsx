import { Link, useLocation } from "react-router-dom";
import "./headerLink.scss";


const HeaderLink = ({ name }) => {

    const { state } = useLocation();

    return (
        <Link to={`/pepper-store/build/category/${name}`} className={`category-item-link ${state === name && 'active'}`} state={name}>
            <span className="category-item">{name}</span>
        </Link>
    )
}

export default HeaderLink
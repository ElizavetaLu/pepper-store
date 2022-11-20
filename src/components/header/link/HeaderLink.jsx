import React from "react";
import { Link } from "react-router-dom";
import "./link.scss"

const HeaderLink = ({name}) => {
    return (
        <Link to={`/pepper-store/build/category/${name}`} className="link" state={name}>
            <div className="category-item">{name}</div>
        </Link>
    )
}

export default HeaderLink
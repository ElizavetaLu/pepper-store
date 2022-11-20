import React from "react";
import "./categoryBlock.scss"

const CategoryBlock = ({ name, description, image }) => {
    return (
        <div className="block">
            <div className="container-cat">
                <div className="category-text">
                    <div className="category-title">{name}</div>
                    <div className="category-description">{description}</div>
                </div>
            </div>
            <div className="category-picture">
                <img src={`/pepper-store/build//images/${image}`} alt="" />
            </div>
        </div>
    )
}

export default CategoryBlock
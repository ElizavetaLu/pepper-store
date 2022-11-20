import React from "react";
import "./sectionTitle.scss"

const SectionTitle = ({title}) => {
    return (
        <div className="title">
            <div className="line"></div>
            <div className="text">{title}</div>
            <div className="line"></div>
        </div>
    )
}

export default SectionTitle
import { Link } from "react-router-dom";
import "./footer.scss"

const Footer = () => {
    return (
        <div className="footer">
            <Link to="/pepper-store/build/" className="logo-link">
                <img className="logo" src="/pepper-store/build//images/icons/bell-pepper.png" alt="" />
            </Link>
            <div className="navbar">
                <div className="nav-item">main</div>
                <div className="nav-item">products</div>
                <div className="nav-item">blog</div>
                <div className="nav-item">shop</div>
                <div className="nav-item">contacts</div>
            </div>
            <div className="horizontal-line"></div>
            <div className="company">@ 2022 Pepper-land. All rights are reserved</div>
        </div>
    )
}

export default Footer
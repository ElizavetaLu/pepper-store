import "./button.scss";

const Button = ({ action, text, uppercase }) => {
    return (
        <button className={`button ${uppercase && 'uppercase'}`} onClick={action}>
            <span className="button-text">{text}</span>
        </button>
    )
}

export default Button
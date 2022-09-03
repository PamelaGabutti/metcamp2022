function Button ({text, onClick}) {
        return (
            <button className="button is-info is-light is-medium" onClick={onClick}>{text}</button>
        )
}

export default Button;
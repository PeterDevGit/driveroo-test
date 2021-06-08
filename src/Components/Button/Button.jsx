import React from "react";
import './Button.scss';

const Button = ({label, className, handleSubmit}) => {
    return (
        <button
            className={className}
            onClick={handleSubmit}
        >
            {label}
        </button>
    )
}

export default Button;
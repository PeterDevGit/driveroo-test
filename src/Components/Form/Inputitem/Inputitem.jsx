import React from "react";
import './Inputitem.scss';

const Inputitem = ({label, name, type, value, placeholder, changeValue, error}) => {

    return(
        <span className="form-input">
            <label htmlFor={label}>
                {label}
            </label>

            <input
                name={name}
                type={type}
                value={value}
                id={label}
                placeholder={placeholder}
                onChange={(e) => changeValue(e)}
            />
            {error && <span className="error-message">{error}</span>}
        </span>
    );
}

Inputitem.defaultProps = {
    changeValue: ()=> {}
}

export default Inputitem;
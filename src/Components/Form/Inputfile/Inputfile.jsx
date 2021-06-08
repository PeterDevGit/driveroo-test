import React from "react";
import './Inputfile.scss';

const Inputfile = ({label, name, url,changeValue, error}) => {
    return (
        <span className="input-file">
            <label htmlFor={label}>{label}</label>

            <div className="input-block">
                <input
                    accept="image/jpeg,image/png,image/gif"
                    name={name}
                    type="file"
                    id={label}
                    onChange={(e) => changeValue(e)}
                />

                {url && <span className="pic-preview">
                    <img src={url} alt="user avatar"/>
                </span>
                }
             </div>

            {error && <span className="error-message">{error}</span>}
        </span>
    )
}

Inputfile.defaultProps = {
    changeValue: ()=> {}
}

export default Inputfile;
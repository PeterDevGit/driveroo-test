import React from "react";
import './Selectitem.scss'

const Selectitem = ({options,value, changeValue}) => {

    return (
        <select
            name="select"
            className="select-component"
            defaultValue={value}
            onChange={(e) => changeValue(e)}
        >
            {options.length && options.map((opt) => {
                return (
                    <option
                        key={opt}
                        value={opt}
                    >
                        {opt}
                    </option>)
                })
            }
        </select>
    );
}

Selectitem.defaultProps = {
    changeValue: () => {}
}

export default Selectitem;
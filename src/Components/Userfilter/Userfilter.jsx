import React, { useState } from "react";
import './Userfilter.scss';
import Inputitem from "../Form/Inputitem/Inputitem";

const Userfilter = ({filterValue}) => {
    const [value, setValue] = useState('');

    const changeValueHangler = (e) => {
        const value = e.target.value
        setValue(value);
        filterValue(value);
    }

    return(
        <Inputitem
            value={value}
            name="user_filter"
            type="text"
            placeholder="Enter name"
            changeValue={changeValueHangler}
        />
    );
}

export default Userfilter;
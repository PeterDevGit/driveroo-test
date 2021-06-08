import React from "react";
import deleteIcon from '../../img/delete_icon1.svg';
import {Link} from "react-router-dom";
import moment from "moment";

import './Useritem.scss';

const Useritem = ({data, deleteHandler}) => {
    const birthDate = moment(data.date_of_birth).format('DD/MM/YYYY');

    return (
        <span className="user-item">
            <Link to={`users/${data.id}`} className="user-info" >
                <img src={data.avatar} alt="user avatar" className="small-avatar"/>
                <span className="user-name">{data.username}</span>
                <span className="birth-date">{birthDate}</span>
            </Link>

            <img
                src={deleteIcon}
                alt="remove btn"
                className="remove-user-btn"
                onClick={() => deleteHandler(data)}
            />
        </span>
    );
}

export default Useritem;
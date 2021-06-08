import React, { Fragment } from "react";
import moment from "moment";
import { useSelector } from "react-redux";

import { useParams } from "react-router-dom";
import './Userpage.scss';
import Header from "../Header/Header";
import homeIcon from "../../img/home_icon.svg";

const Userpage = () => {
    const router = useParams();
    const {users} = useSelector(store => store);

    const filterUser = users && users.find((user) => user.id === Number(router.id));
    const birthDate = filterUser && moment(filterUser.date_of_birth).format('DD/MM/YYYY');

    return (
        <Fragment>
            <Header title="User singe page" icon={homeIcon} />
            {filterUser && filterUser.id ? (
                <div className="user-single-page">
                        <span className="user-photo">
                            <img src={filterUser.avatar} alt="Avatar"/>
                        </span>

                        <span className="user-info">
                            <h2>{filterUser.username}</h2>
                            <span>{birthDate}</span>
                            <span>{filterUser.email}</span>
                            <span>{filterUser.gender}</span>

                            <span>
                                Address:
                                <ul>
                                <li>City: {filterUser.address.city}</li>
                                <li>Country: {filterUser.address.country}</li>
                                <li>State: {filterUser.address.state}</li>
                                <li>Street: {filterUser.address.street_name}</li>
                                </ul>
                            </span>
                        </span>
                </div> ) : <h2>No users</h2>}
        </Fragment>
    );
}

export default Userpage;
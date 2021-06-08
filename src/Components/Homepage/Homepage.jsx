import React, {Fragment} from "react";

import Userslist from "../Userlist/Userlist";

import './Homepage.scss';
import Header from "../Header/Header";
import addUserIcon from "../../img/add_user_icon1.svg";

const Homepage = () => {
    return(
        <Fragment>
            <Header title="All users list" icon={addUserIcon} url="add-user"/>
            <Userslist />
        </Fragment>
    )
}


export default Homepage;
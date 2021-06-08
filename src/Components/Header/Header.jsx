import React from "react";
import './Header.scss';
import {Link} from "react-router-dom";

const Header = ({title,url = "", icon}) => {
    return(
        <header>
            <h2>{title}</h2>
            <Link to={`/${url}`}>
                <img src={icon} alt="header navigation" className="add-user" />
            </Link>
        </header>
    );
}

export default Header;
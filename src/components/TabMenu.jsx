import React from 'react';
import { Link } from 'react-router-dom';
import './TabMenu.css';

const TabMenu = ({ current }) => {
    return (
        <div className="tabMenu">

            <Link to="/" className={`tabMenu__home ${current === 'movie' && 'tabMenu__home--active'}`}>
                <i className="tabMenu__icon"></i>
                <span className="tabMenu__txt">电影</span>
            </Link>


            <Link to="/user" className={`tabMenu__user ${current === 'user' && 'tabMenu__user--active'}`}>
                <i className="tabMenu__icon"></i>
                <span className="tabMenu__txt">我的</span>
            </Link>

        </div>

    );
}

export default TabMenu;

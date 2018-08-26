import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TopBar.css';


const TopBar = ({onClickCity,city}) => {
    return (
        <div className="topbar">
            <div className="topbar__city" onClick={() =>{onClickCity()}}><span>{city}</span></div>
            <div className="topbar__search"><span>搜影片、影院、影人</span></div>
            <div className="topbar__scan"><span></span></div>
        </div>
    );

};
export default TopBar;
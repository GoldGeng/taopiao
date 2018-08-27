import React, { Component } from 'react';
import TabMenu from '../../components/TabMenu';
import './index.css';

class User extends Component {
    render() {
        return (
            <div className="user">
                <div className="user__top">
                    <div className="user__top--bar">
                        <div className="user__top--setting">
                            <i></i>
                        </div>
                        <div className="user__top--message">
                            <i ></i>
                        </div>
                    </div>
                    <div className="user__top--deriction">
                        <div className="user__top--img">
                            <img src="./source/avatar.jpeg" alt=""/>
                        </div>
                        <div className="user__top--info">
                            <div className="user__top--info__name">大富大贵</div>
                            <div className="user__top--info__concern">关注 0 | 被关注 0</div>
                        </div>
                    </div>
                </div>
                <div className="user__content">
                    <div className="user__content--keep">
                        <span className="user__content--keep__left">收藏的电影</span>
                        <span className="user__content--keep__right">2 &gt;</span>
                    </div>
                    <div className="user__content--looked">
                        <span className="user__content--looked__left">看过的电影</span>
                        <span className="user__content--looked__right">64 &gt;</span>
                    </div>
                </div>
                <div className="user__tabMenu">
                <TabMenu current="user"/>
                </div>
            </div>
        );
    }
}

export default User;
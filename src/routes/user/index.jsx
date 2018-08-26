import React, { Component } from 'react';
import TabMenu from '../../components/TabMenu';

class User extends Component {
    render() {
        return (
            <div>
                用户
                <TabMenu current="user"/>
            </div>
        );
    }
}

export default User;
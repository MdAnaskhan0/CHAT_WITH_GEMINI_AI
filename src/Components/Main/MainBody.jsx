import React from 'react';
import { assets } from '../../assets/assets';
import './Main.css'

const MainBody = () => {
    return (
        <div className="main">
            <div className="nav">
                <p>CHAT-AI</p>
                <img src={assets.user_icon} alt="" />
            </div>
        </div>
    );
};

export default MainBody;

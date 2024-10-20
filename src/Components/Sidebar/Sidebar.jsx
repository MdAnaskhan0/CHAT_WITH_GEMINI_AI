import React, { useState } from 'react';
import { assets } from '../../assets/assets';
import './Sidebar.css'

const Sidebar = () => {
    const [extended, setExtended] = useState(false);

    return (
        <div>
            <div className="sidebar">
                {/* top */}
                <div className="top">
                    <img onClick={()=> setExtended(prev => !prev)} src={assets.menu_icon} alt="menu icon" />
                    <div className="newChat">
                        <img src={assets.plus_icon} alt="" />
                        {extended ? <p>New Chat</p> : null}
                    </div>
                    {extended ? <>
                        <div>
                        <p className="recentTitle">Recent</p>
                        <div className="recentEntry">
                            <img src={assets.message_icon} alt="" />
                            <p>What is react ...</p>
                        </div>
                    </div> 
                    </> : null}
                </div>

                {/* bottom */}
                <div className='bottom'>
                    <div className="bottomItem recentEntry">
                        <img src={assets.question_icon} alt="" />
                        {extended ? <p>Help</p> : null}
                    </div>

                    <div className="bottomItem recentEntry">
                        <img src={assets.history_icon} alt="" />
                        {extended ? <p>Activity</p> : null}
                    </div>

                    <div className="bottomItem recentEntry">
                        <img src={assets.setting_icon} alt="" />
                        {extended ? <p>Setting</p> : null}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Sidebar;

import React, { useContext, useState } from 'react';
import { assets } from '../../assets/assets';
import './Sidebar.css'
import { Context } from '../../Context/context';
import { TbTrash } from 'react-icons/tb';

const Sidebar = () => {
    const [extended, setExtended] = useState(false);
    const { prevPrompt, onSend, setRecentPrompt, setPrevPrompt, newChat , setShowResult} = useContext(Context);

    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt);
        await onSend(prompt);
    };

    // Function to remove a specific prompt by index
    const removePrompt = (indexToRemove) => {
        setPrevPrompt((prev) => prev.filter((_, index) => index !== indexToRemove));
    };

    return (
        <div>
            <div className="sidebar">
                {/* top */}
                <div className="top">
                    <img
                        onClick={() => setExtended((prev) => !prev)}
                        src={assets.menu_icon}
                        alt="menu icon"
                    />
                    <div onClick={()=>newChat()} className="newChat">
                        <img src={assets.plus_icon} alt="" />
                        {extended ? <p>New Chat</p> : null}
                    </div>
                    {extended && (
                        <div>
                            <p className="recentTitle">Recent</p>
                            {Array.isArray(prevPrompt) &&
                                prevPrompt.map((item, index) => (
                                    <div
                                        onClick={() => loadPrompt(item)}
                                        key={index}
                                        className="recentEntry"
                                    >
                                        <img src={assets.message_icon} alt="" />
                                        <p>{item.slice(0, 15)}...</p>
                                        <TbTrash
                                            onClick={(e) => {
                                                e.stopPropagation(); 
                                                removePrompt(index);
                                                setShowResult(false);
                                            }}
                                            className="text-xl"
                                        />
                                    </div>
                                ))}
                        </div>
                    )}
                </div>

                {/* bottom */}
                <div className="bottom">
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


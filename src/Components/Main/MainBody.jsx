import React, { useContext } from 'react';
import { assets } from '../../assets/assets';
import './Main.css';
import { Context } from '../../Context/context';

const MainBody = () => {
    const {
        onSend,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
    } = useContext(Context);

    const handleSend = () => {
        if (input.trim()) {
            onSend(input); // Call onSend with the current input
            setInput(''); // Clear the input field
        }
    };

    return (
        <div className="main">
            <div className="nav">
                <p>CHAT-AI</p>
                <img src={assets.user_icon} alt="User Icon" />
            </div>

            <div className="mainContainer">
                <div className="greet">
                    <p><span>Hello, Dev.</span></p>
                    <p>How can I help you?</p>
                </div>

                <div className="cards">
                    <div className="card">
                        <p>Suggest a beautiful place to see on an upcoming road trip</p>
                        <img src={assets.compass_icon} alt="Compass Icon" />
                    </div>

                    <div className="card">
                        <p>Briefly summarize this concept: urban planning</p>
                        <img src={assets.bulb_icon} alt="Bulb Icon" />
                    </div>

                    <div className="card">
                        <p>Brainstorm team bonding activities for our work retreat</p>
                        <img src={assets.message_icon} alt="Message Icon" />
                    </div>

                    <div className="card">
                        <p>Improve the readability of the following code</p>
                        <img src={assets.code_icon} alt="Code Icon" />
                    </div>
                </div>

                <div className="mainBottom">
                    <div className="searchBox">
                        <input
                            type="text"
                            placeholder="Enter a prompt here"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <div onClick={handleSend} style={{ cursor: 'pointer' }}>
                            <img src={assets.send_icon} alt="Send Icon" />
                        </div>
                    </div>

                    {loading && <p>Loading...</p>}

                    {showResult && (
                        <div className="resultBox">
                            <p><strong>Prompt:</strong> {recentPrompt}</p>
                            <p><strong>Response:</strong> {resultData}</p>
                        </div>
                    )}

                    <p className="bottomInfo">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, accusantium?
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MainBody;

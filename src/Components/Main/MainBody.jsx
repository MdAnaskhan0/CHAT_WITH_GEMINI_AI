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
            onSend(input);
            setInput('');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') handleSend();
    };

    const cardsData = [
        { text: "Suggest a beautiful place to see on an upcoming road trip", icon: assets.compass_icon },
        { text: "Briefly summarize this concept: urban planning", icon: assets.bulb_icon },
        { text: "Brainstorm team bonding activities for our work retreat", icon: assets.message_icon },
        { text: "Improve the readability of the following code", icon: assets.code_icon },
    ];

    return (
        <div className="main">
            <div className="nav">
                <p>CHAT-AI</p>
                <img src={assets.user_icon} alt="User Icon" />
            </div>

            <div className="mainContainer">
                {!showResult ? (
                    <>
                        <div className="greet">
                            <p><span>Hello, Dev.</span></p>
                            <p>How can I help you?</p>
                        </div>

                        <div className="cards">
                            {cardsData.map((card, index) => (
                                <div key={index} className="card">
                                    <p>{card.text}</p>
                                    <img src={card.icon} alt="Icon" />
                                </div>
                            ))}
                        </div>
                    </>
                ) : (
                    <div className="result">
                        <div className="resultTitle">
                            <img src={assets.user_icon} alt="" />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="resultData">
                            <img src={assets.gemini_icon} alt="" />
                            {loading ? (
                                <div className='loader'>
                                    <hr />
                                    <hr />
                                    <hr />
                                </div>
                            ) : (
                                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                            )}
                        </div>
                    </div>
                )}

                <div className="mainBottom">
                    <div className="searchBox">
                        <input
                            type="text"
                            placeholder="Enter a prompt here"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyPress}
                        />
                        <div onClick={handleSend} style={{ cursor: 'pointer' }}>
                            <img src={assets.send_icon} alt="Send Icon" />
                        </div>
                    </div>

                    <p className="bottomInfo">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, accusantium?
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MainBody;


import { createContext, useState } from "react";
import run from "../Config/ChatAI";

export const Context = createContext();

const ContextProvider = (props) => {
    const [input, setInput] = useState('');
    const [recentPrompt, setRecentPrompt] = useState('');
    const [prevPrompt, setPrevPrompt] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState('');

    const delayPara = (index, nextWord) => {
        setTimeout(function () {
            setResultData(prev => prev + nextWord)
        }, 75 * index)
    }

    const newChat = () =>{
        setLoading(false)
        setShowResult(false)
    }

    const onSend = async (prompt) => {
        setResultData('');
        setLoading(true);
        setShowResult(true);

        const newPrompt = prompt !== undefined ? prompt : input;
        setPrevPrompt((prev) =>
            prev.includes(newPrompt) ? prev : [...prev, newPrompt]
        );

        setRecentPrompt(newPrompt);

        const response = await run(newPrompt);

        let responseArray = response.split("**");
        let newResponse = "";
        for (let i = 0; i < responseArray.length; i++) {
            if (i === 0 || i % 2 !== 1) {
                newResponse += responseArray[i];
            } else {
                newResponse += "<b>" + responseArray[i] + "</b>";
            }
        }

        const newResponse2 = newResponse.split("*").join("</br>");
        const newResponseArray = newResponse2.split(" ");
        for (let i = 0; i < newResponseArray.length; i++) {
            const nextWord = newResponseArray[i];
            delayPara(i, nextWord + " ");
        }

        setLoading(false);
        setInput('');
    };

    const contextValue = {
        prevPrompt,
        setPrevPrompt,
        onSend,
        recentPrompt,
        setRecentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
        newChat
    };

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    );
};

export default ContextProvider;

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

    const onSend = async (prompt) => {
        try {
            setLoading(true); 
            const result = await run(prompt); 
            setResultData(result); 
            setShowResult(true); 
            setPrevPrompt([...prevPrompt, prompt]);
            setRecentPrompt(prompt); 
        } catch (error) {
            console.error("Error during API call:", error);
        } finally {
            setLoading(false); 
        }
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
    };

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    );
};

export default ContextProvider;

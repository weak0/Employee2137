import { ReactElement, createContext, useState } from "react";
import { auth } from "./consts";

interface ContextProps {
    isUserLogged: boolean;
    userLogin: (login : string, password : string) => void;
    messages : string[];
    setMessages : (messages : any) => void;
    options : any;
    setOptions : (options : any) => void;
}

 const defaultContext : ContextProps = {
    isUserLogged: false,
    userLogin: () => {},
    messages : [],
    setMessages : () => {},
    options : '',
    setOptions : () => {},
};

export const Context = createContext(defaultContext);

export const ContextProvider = ({ children } : {children : ReactElement}) => {
    const [isUserLogged, setIsUserLogged] = useState(false);
    const [messages, setMessages] = useState<string[]>(['m01'])
    const [options, setOptions] = useState<string>('o01')




    const userLogin = (login : string, password : string) => {
        if (login === auth.login && password === auth.password) {
        setIsUserLogged(true);
        return;
        }
        alert("Wrong login or password");
    }

    const addMsg = (msg : string) => {
        if (!messages.includes(msg)) {
            setMessages(prevState => [...prevState, msg]);
        }
    }
    const value = {
        isUserLogged,
        userLogin,
        messages,
        setMessages : (msg : string) => addMsg(msg),
        options,
        setOptions : (options : any) => setOptions(options),

    }

    return <Context.Provider value={value}>{children}</Context.Provider>;
    }
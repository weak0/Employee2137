import { useEffect, useContext } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import './Messneger.css'
import avatar from '../../assets/jp2.jpg'
import { useRef } from "react";
import { story, options as activeOptions } from "../../store/consts";
import { Context } from "../../store/context";

const Messneger = ({ close }: { close: () => void }) => {

    const chatRef = useRef<HTMLDivElement>(null)
    const inputFieldRef = useRef<HTMLInputElement>(null)
    const contacts = ['Paul', 'Zbychu', 'Boss', 'Basia', 'Piotrek', 'Maciek']
    const { messages, setMessages, options, setOptions } = useContext(Context)


    useEffect(() => {
        console.log(messages)
        story[messages[messages.length - 1]]?.fnOpt !== undefined && setOptions(story[messages[messages.length - 1]].fnOpt)
        story[messages[messages.length - 1]]?.fnMsg !== undefined && setMessages(story[messages[messages.length - 1]].fnMsg)
    }, [messages])

return (
    <div className='msg'>
        <div className='msg-header' >
            <h3>Messenger</h3>
            <IoIosCloseCircleOutline size={32} onClick={close} />
        </div>
        <div className='msg-main'>
            <div className='msg-contacts'>
                <div className="contact">
                    <img src={avatar} alt='avatar' id='avatar' />
                    <p>dXYellowFaceXd</p>
                </div>
                {contacts.map((contact, index) => (<div className="contact blocked" key={index}>
                    <img src={avatar} alt='avatar' id='avatar' />
                    <p>{contact}</p>
                </div>))}
            </div>
            <div className='msg-chat'>
                <div className="chat-output" ref={chatRef}>
                    {messages.map(element => <p className={story[element].type} key={element}>{story[element].message}</p>)}
                </div>
                <div className="chat-input" ref={inputFieldRef}>
                    {options !== 'o00' && Object.entries(activeOptions[options]).map(([key, option]) => (
                        <button key={key} className={option.className} disabled={option.disabled} title={option.title} onClick={() => option.fn && setMessages(option.fn)}>
                            {option.text}
                        </button>
                    ))}
                </div>
            </div>
        </div>

    </div>
)
}

export default Messneger
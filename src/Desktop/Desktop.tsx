import './Desktop.css'
import { FaWindows, FaFacebookMessenger } from "react-icons/fa";
import { SiVisualstudio } from "react-icons/si";
import { IoTerminal } from "react-icons/io5";
import { useEffect, useState } from 'react';
import Messneger from './Messneger/Messneger';
import Console from './Console/Console';

const Desktop = () => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());
  const [showPopup, setShowPopup] = useState(false);
  const [blocked, setBlocked] = useState(false);
  const [isMessengerActive, setIsMessengerActive] = useState(false);
  const [isTerminalActive, setIsTerminalActive] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleString());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleHackedClick = () => {
    setShowPopup(true);
    setBlocked(true);
  };

  return (
    <div className='desktop'>
      {showPopup && <div className='error'>
        <h2>Hacked</h2>
        <p>Zabrałem ci dostęp</p>
        <button onClick={() => (setShowPopup(false))}>Ok</button>
      </div>}
      <div className="main">
        {isMessengerActive && <Messneger close={() => setIsMessengerActive(false)} />}
        {isTerminalActive && <Console />}
      </div>
      <div className="toolbar">
        <div className='icons'>
          <FaWindows size={24} className={blocked ? "hacked blocked" : "hacked"} onClick={handleHackedClick} />
          <SiVisualstudio size={24} className={blocked ? "hacked blocked" : "hacked"} onClick={handleHackedClick} />
          <FaFacebookMessenger size={24} onClick={() => setIsMessengerActive(!isMessengerActive)} />
          <IoTerminal size={24} onClick={() => setIsTerminalActive(!isTerminalActive)} />
        </div>
        <div className='time'>
          <p>{currentTime}</p>
        </div>
      </div>
    </div>
  )
}

export default Desktop
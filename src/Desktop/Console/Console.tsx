import { useRef, useState, useContext } from 'react'
import './Console.css'
import music from '../../assets/djmusic.mp3'
import { Context } from '../../store/context'


const Console = () => {
  const [input, setInput] = useState('')
  const consoleRef = useRef<HTMLDivElement>(null)
  const { setMessages } = useContext(Context)

  const runComand = (comand: string) => {
    switch (comand) {
      case 'shutdown':
        window.location.reload()
        break;
      case 'djmusic':
        let audio = new Audio(music)
        audio.play()
        audio.volume = 0.1
        if (consoleRef.current) {
          consoleRef.current.innerHTML += "Run Jan Paweł the greatest hits...<br />"
        }
        setMessages('m04')
        break;
      case 'toitakbynicniedalo':
        if (consoleRef.current) {
          consoleRef.current.innerHTML += "GRUPA: Fanpage Mariusz Pudzianowski <br />"
          consoleRef.current.innerHTML += "Autor: Employee2137 <br />"
          consoleRef.current.innerHTML += "Pudzian to sterydziarz, wcale nie jest taki silny a w kulach to wgl był drugi <br />"
        }
        setMessages('m15')
        break;

      default:
        if (consoleRef.current) {
          consoleRef.current.innerHTML += `${comand} nie jest rozpoznawalną komendą <br />`
        }
        break;
    }
  }

  const handleClick = (key: React.KeyboardEvent) => {
    if (key.code === 'Enter') {
      runComand(input.toLowerCase().trim())
      setInput('')
    }
  }



  return (
    <div className='console' onKeyDown={handleClick}>
      <div className='console-output' ref={consoleRef}>
        Microsoft Windows [Version 10.0.22631.2861]<br />
        (c) Microsoft Corporation. Wszelkie prawa zastrzeżone.<br />
      </div>
      C:Users/Employee2137:<input className='console-input' value={input} onChange={(e) => setInput(e.target.value)} />
    </div>
  )
}

export default Console
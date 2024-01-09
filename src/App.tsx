import './App.css'
import { useContext, useState } from 'react'
import { Context } from './store/context';
import Desktop from './Desktop/Desktop';
function App() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const { userLogin, isUserLogged } = useContext(Context);

  return (
    <div className='App'>
      {!isUserLogged ? <div>
        <h1>Quantum Corporation</h1>
        <div className='login-form'>
          <label htmlFor='username'>Username</label>
          <input id='username' type='text' placeholder='employer2137' value={login} onChange={(e) => setLogin(e.target.value)} />
          <label htmlFor='password'>Password</label>
          <input id='password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
          <button className='login-button' onClick={() => userLogin(login, password)}>Login</button>
        </div>
      </div>
        : <Desktop />}

    </div>
  )
}

export default App

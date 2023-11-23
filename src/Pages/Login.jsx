import { useSetAtom } from "jotai";
import Cookies from "js-cookie"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { userAtom } from "../Atoms/userAtom";

const LogIn = () => {
  const [ email, setEmail] = useState('')
  const [ password, setPassword ] = useState('')
  const [ pending, setPending ] = useState(false)
  const setUser = useSetAtom(userAtom)
  const signUpUrl = 'http://localhost:3000/login';
  const navigate = useNavigate();

  const signInUser = (e) => {
    e.preventDefault();
    const userInfo = { user: { email, password }}

fetch(signUpUrl, { method: 'POST', headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userInfo)
    })
    .then(response => response.json())
    .then(data => {
      Cookies.set('token', data.jwt);
      setUser(data.user)
      setPending(false);
      navigate('/');
    })
  }

  return (
  <>
      <div className="log-in">
        <form onSubmit={signInUser} className="flex flex-col m-2">
          <label>User name or email:</label>
          <input 
            required
            type="text"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
          />
            <label>Password</label>
          <input
            required
            type="password"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
          />
            {!pending && <button className="bg-rose-500 mt-3">Sign In</button>}
            {pending && <button className="bg-gray mt-3">Processing</button>}
        </form>
      </div>
  </>
  )
}

export { LogIn }

import { useSetAtom } from "jotai";
import Cookies from "js-cookie";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userAtom } from "../Atoms/userAtom";

const Register = () => {
  const [ pending, setPending ] = useState(false)
  const [ error, setError ] = useState('');
  const [ email, setEmail] = useState('')
  const [ password, setPassword ] = useState('')
  const setUser = useSetAtom(userAtom)
  const signUpUrl = 'http://localhost:3000/signup';
  const navigate = useNavigate();

  const signUpUser = (e) => {
    e.preventDefault();
    const userInfo = {user: { email: email, password: password}}
    console.log(JSON.stringify(userInfo))
    setPending(true);

    fetch(signUpUrl, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
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
    .catch(err => {
        setPending(false);
        setError(err.message);
        console.log(error)
      })
  }

  return (
  <>
      <div className="log-in">
        <form onSubmit={signUpUser} className="flex flex-col">
          <label>Email:</label>
          <input 
            required
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
            <label>Password</label>
          <input
            required
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
            {!pending && <button>Register</button>}
            {pending && <button>Processing</button>}
        </form>
      </div>
  </>

  )
}

export { Register }

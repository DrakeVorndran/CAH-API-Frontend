import React, { useState } from 'react'

const sub = (username, password, setApiKey) => {
  fetch('http://localhost:4000/login', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email: username, password })
  })
    .then(res => res.json())
    .then(res => setApiKey(res.key))
    .catch(err => console.log(err))
}

function LogIn() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [apiKey, setApiKey] = useState('')
  return (
    <div>
      {!apiKey?<>
        <h1>Log In</h1>
        <div className="input-group">
          <input type='text' placeholder="coolguy99" value={username} onChange={(e) => setUsername(e.target.value)}></input>
          <label>Username</label>
        </div>
        <div className="input-group">
          <input type='password' placeholder="$ecur1ty99" value={password} onChange={(e) => setPassword(e.target.value)}></input>
          <label>Password</label>
        </div>
        <br />
        <div className='input-group'>
          <button onClick={() => sub(username, password, setApiKey)}>Log In</button>
        </div>
      </>:<>
      <p>Your api Key is: {apiKey}</p>
      </>
      }
    </div>
  )
}

export default LogIn
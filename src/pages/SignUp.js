import React, { useState } from 'react'

const sub = (username, password, repeat, setApiKey) => {
  if (password === repeat) {
    fetch('http://localhost:4000/register', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: username, password})
    })
    .then(res => res.json())
    .then(res => setApiKey(res.key))
    .catch(err => console.log(err))
  }
}

function SignUp() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [repeat, setRepeat] = useState('')
  const [apiKey, setApiKey] = useState('')
  return (
    <div>
      {!apiKey?<>
      <h1>Sign Up</h1>
      <div className="input-group">
        <input type='text' placeholder="coolguy99" value={username} onChange={(e) => setUsername(e.target.value)}></input>
        <label>Username</label>
      </div>
      <div className="input-group">
        <input type='password' placeholder="$ecur1ty99" value={password} onChange={(e) => setPassword(e.target.value)}></input>
        <label>Password</label>
      </div>
      <div className="input-group">
        <input type='password' placeholder="$ecur1ty99" value={repeat} onChange={(e) => setRepeat(e.target.value)}></input>
        <label>Repeat Password</label>
      </div>
      <br />
      <div className='input-group'>
        <button onClick={() => sub(username, password, repeat, setApiKey)}>Sign Up</button>
      </div>
      </>:
      <>
      <p>Your api key is {apiKey}</p>
      </>
      }
    </div>
  )
}

export default SignUp
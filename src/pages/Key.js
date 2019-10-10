import React, { useState, useEffect } from 'react'


function Key() {
  const [hasKey, setHasKey] = useState(false)
  const [key, setKey] = useState(NaN)
  useEffect(() => {
    // Do The Fetch
    fetch('http://localhost:4000/random?n=5')
      .then(res => res.json())
      .then(json => {
        setKey(json.value)
        setHasKey(true)
      })

  }, [])
  // const key = 'err'
  return (
    <div>
      {hasKey ? <p>Your key is: {key}</p> : <p>Waiting for server</p>}

    </div>
  )
}

export default Key
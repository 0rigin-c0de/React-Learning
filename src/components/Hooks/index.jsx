import React, { useState } from 'react'
import ReactDOM from 'react-dom'

function App() {
  let [country, setCountry] = useState('')
  let [state, setState] = useState('')

  return (
    <form>
      <label>
        <span className="label">Country</span>
        <select
          value={country}
          onChange={event => setCountry(event.target.value)}>
          <option value="oceania">Oceania</option>
          <option value="other">Other</option>
        </select>
      </label>
      <label>
        <span className="label">State</span>
        <input
          value={state}
          onChange={event => setState(event.target.value)}
        />
      </label>
    </form>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
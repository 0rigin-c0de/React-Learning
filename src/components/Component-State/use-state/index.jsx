import React from "react";
import { ReactDOM } from "react";
import './styles.css'

function App(){
    let [name, setName]=useState('')

    return(
        <label>
            <span className="label"></span>
            <input value={name}
            onChange={event => setName(event.target.value)}/>
            {!name && 'Please enter your name'}
            </label>
    )
}
const domNode = document.getElementById('root')
ReactDOM.render(<App />, domNode)
import { useState } from "react";
import "./App.css";

function App() {
    const [value, setValue] = useState(1)
    // const [multipliedValue, setMultipliedValue] = useState(1)
    let multipliedValue = value * 5
    
    const mulplication = () => {
        setValue(value+1)
    }

    return (
        <>
            <h1>original value: {value}</h1>
            <button onClick={mulplication}>click to multiply by 5</button>
            <h2>multiplied value: {multipliedValue}</h2>
        </>
    )
}

export default App;

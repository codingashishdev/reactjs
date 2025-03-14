import { useState } from "react";

function App() {
    const [counter, setCounter] = useState(0);

    const add = () => {
        setCounter(counter+1)
    };

    const remove = () => {
        setCounter(counter-1)
    };

    return (
        <>
            <h1>React Counter</h1>
            <h2>Counter value: {counter} </h2>

            <button onClick={add}>Add</button>
            <button onClick={remove}>Descrease</button>
        </>
    );
}

export default App;

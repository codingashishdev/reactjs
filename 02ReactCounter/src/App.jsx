import { useState } from "react";

function App() {
    let [counter, setCounter] = useState(0);

    const add = () => {
        setCounter(counter+1)
    };

    const remove = () => {
        if(counter-1 < 0)return;
        setCounter(counter-1)
    };

    return (
        <>
            <h1>React Counter</h1>
            <h2>Counter value: {counter} </h2>

            {/* don't do add() or remove() function will be executed without waiting for a click */}
            <button onClick={add}>Add</button>
            <button onClick={remove}>Descrease</button>
        </>
    );
}

export default App;

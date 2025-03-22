<<<<<<< HEAD
import React, { useState, useCallback, useEffect } from "react";
=======
import React, { useState, useCallback, useEffect, useRef } from "react";
>>>>>>> a650c5010f30ad573b1e958e0bcc05dde7994852
import "./App.css";

function App() {
    const [Length, setLength] = useState(5);
    const [NumberAllowed, setNumberAllowed] = useState(false);
    const [CharactersAllowed, SetCharactersAllowed] = useState(false);
    const [password, setPassword] = useState("");
    const passwordReference = useRef(null);

    const passwordGenerator = useCallback(() => {
        let generatedPassword = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        if (NumberAllowed) str += "0123456789";
        if (CharactersAllowed) str += "!@#$%^&*(){}-_+=";

        for (let index = 1; index <= Length; index++) {
            let characterIndex = Math.floor(Math.random() * str.length + 1);
            let character = str.charAt(characterIndex);
            generatedPassword += character;
        }

        setPassword(generatedPassword);
        //added setPassword for optimization purpose
        //if by change we add password then we could stuck in infinite(password generation) loop
    }, [Length, NumberAllowed, CharactersAllowed, setPassword]);

<<<<<<< HEAD
    useEffect(()=>{    
        passwordGenerator()
    }, [Length, NumberAllowed, CharactersAllowed, passwordGenerator])
=======
    const copyPasswordToClipboard = useCallback(() => {
        passwordReference.current?.select();
        passwordReference.current?.setSelectionRange(0, Length);
        window.navigator.clipboard.writeText(password);
    }, [password]);

    useEffect(() => {
        passwordGenerator();
    }, [Length, NumberAllowed, CharactersAllowed, passwordGenerator]);
>>>>>>> a650c5010f30ad573b1e958e0bcc05dde7994852

    return (
        <>
            <div className="w-full h-vh ml-100 mt-5">
                <div className="w-2xl h-xl bg-gray-700 p-4 rounded-xl">
                    <h2 className="text-center pb-1">Password Generator</h2>
                    <div className="">
                        <input
                            type="text"
                            className="bg-white w-6/7 h-12 rounded-xl p-4 text-black"
                            readOnly
                            placeholder="Password"
                            value={password}
<<<<<<< HEAD
=======
                            ref={passwordReference}
>>>>>>> a650c5010f30ad573b1e958e0bcc05dde7994852
                        />
                        <button
                            className="bg-blue-500 text-white h-12 relative right-3"
                            onClick={copyPasswordToClipboard}
                        >
                            Copy
                        </button>
                    </div>
                    <div className="flex justify-center align-middle">
                        <div className="mt-4">
                            <input
                                type="range"
                                min={1}
                                max={50}
                                value={Length}
                                onChange={(e) => {
                                    setLength(e.target.value);
                                }}
                            />
                            <label>Length: {Length}</label>
                        </div>
                        <div className="m-4 mb-0 space-x-1">
                            <input
                                type="checkbox"
                                defaultChecked={NumberAllowed}
                                name="numbers"
                                onChange={(e) => {
                                    setNumberAllowed((prev) => !prev);
                                }}
                            />
                            <label htmlFor="numbers">Numbers</label>
                            <input
                                type="checkbox"
                                defaultChecked={CharactersAllowed}
                                name="characters"
                                id=""
                                onChange={() => {
                                    SetCharactersAllowed((prev) => !prev);
                                }}
                            />
                            <label htmlFor="characters">Characters</label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;

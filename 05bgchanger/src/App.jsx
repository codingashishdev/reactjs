import React from "react";
import { useState } from "react";
import "./App.css";
// import Button from "./component/Button.jsx";

function App() {
    let [color, setColor] = useState("Black");

    return (
        <>
            <div
                className=" flex justify-center align-middle w-screen h-screen duration-200 m-0 p-10"
                style={{ backgroundColor: color }}
            >
                <div className="flex bg-amber-700 w-4xl h-20 p-5 rounded-4xl  space-x-2 justify-center align-middle shadow-2xl">
                    <button
                        className="h-10 w-25 flex justify-center align-middle"
                        style={{ backgroundColor: "red" }}
                        onClick={() => {
                            setColor("red");
                        }}
                    >
                        red
                    </button>
                    <button
                        className="h-10 w-25 flex justify-center align-middle"
                        style={{ backgroundColor: "blue" }}
                        onClick={() => {
                            setColor("blue");
                        }}
                    >
                        blue
                    </button>
                    <button
                        className="h-10 w-25 flex justify-center align-middle"
                        style={{ backgroundColor: "green" }}
                        onClick={() => {
                            setColor("green");
                        }}
                    >
                        green
                    </button>
                    <button
                        className="h-10 w-25 flex justify-center align-middle"
                        style={{ backgroundColor: "orange" }}
                        onClick={() => {
                            setColor("orange");
                        }}
                    >
                        orange
                    </button>
                    <button
                        className="h-10 w-25 flex justify-center align-middle"
                        style={{ backgroundColor: "yellow", color: "grey" }}
                        onClick={() => {
                            setColor("yellow");
                        }}
                    >
                        yellow
                    </button>
                    <button
                        className="h-10 w-25 flex justify-center align-middle"
                        style={{ backgroundColor: "violet" }}
                        onClick={() => {
                            setColor("violet");
                        }}
                    >
                        violet
                    </button>
                    <button
                        className="h-10 w-25 flex justify-center align-middle"
                        style={{ backgroundColor: "pink" }}
                        onClick={() => {
                            setColor("pink");
                        }}
                    >
                        pink
                    </button>
                    <button
                        className="h-10 w-25 flex justify-center align-middle"
                        style={{ backgroundColor: "maroon" }}
                        onClick={() => {
                            setColor("maroon");
                        }}
                    >
                        maroon
                    </button>
                </div>
            </div>
        </>
    );
}

export default App;

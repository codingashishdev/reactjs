import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

function NewApp() {
    return (
        <h1>Custom CSS</h1>
    );
}

const ReactComponent = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'See my page'
}

const reactElement = React.createElement(
    'a',
    { href: 'https://google.com', target: '_blank' },
    'go to the page'
)

const anotherElement = (
    <a href="https://www.google.com">Click me</a>
)

createRoot(document.getElementById("root")).render(
    // anotherElement()
    // reactElement
    <App />
);

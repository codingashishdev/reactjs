import React from "react";

function Header() {
    return (
        <>
            <header className="h-20 bg-gray-500 flex justify-center">
                <div>
                    <img src="logo.png" alt="" width={30} height={30} />
                    <h1>Currency Converter</h1>
                </div>
                <div className="flex">
                    <ul className="flex">
                        <li>
                            <a href="">Home</a>
                        </li>
                        <li>
                            <a href="">About</a>
                        </li>
                        <li>
                            <a href="">Contact me</a>
                        </li>
                        <li>
                            <a href="">Tools</a>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    );
}

export default Header;

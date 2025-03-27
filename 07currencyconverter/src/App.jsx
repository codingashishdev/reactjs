import React from "react";
import { useState } from "react";
import { InputBox } from "./components/index.js";
import useCurrencyInfo from "./hooks/useCurrencyInfo.js";
import Header from "./components/Header.jsx";

function App() {
    const [amount, setAmount] = useState(1);
    const [from, setFrom] = useState("usd");
    const [to, setTo] = useState("inr");
    const [convertedAmount, setConvertedAmount] = useState("");

    const currencyInformation = useCurrencyInfo(from);

    const options = Object.keys(currencyInformation);

    const swap = () => {
        setFrom(to);
        setTo(from);
        setConvertedAmount(amount);
        setAmount(convertedAmount);
    };

    const convert = () => {
        setConvertedAmount(amount * currencyInformation[to]);
    };

    const redirect = ()=>{
        window.location.href = "/"
    }

    return (
        <>
            <div className="max-w-[85vw] ml-30 mt-2">
                <header className="h-20 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-700 flex justify-evenly items-center px-6 shadow-xl z-40">
                    <div className="flex items-center gap-2 cursor-pointer" onClick={redirect}>
                        <img src="logo.png" alt="" width={30} height={30} style={{borderRadius:50}}/>
                        <h1 className="text-white text-xl hover:text-red-200 hover:underline">
                            Currency Converter
                        </h1>
                    </div>
                    <div>
                        <ul className="flex space-x-6">
                            <li>
                                <a
                                    href=""
                                    className="text-white hover:text-red-200 hover:underline"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href=""
                                    className="text-white hover:text-red-200 hover:underline"
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href=""
                                    className="text-white hover:text-red-200 hover:underline"
                                >
                                    Contact me
                                </a>
                            </li>
                            <li>
                                <a
                                    href=""
                                    className="text-white hover:text-red-200 hover:underline"
                                >
                                    Tools
                                </a>
                            </li>
                        </ul>
                    </div>
                </header>
                
                <div className="py-8 text-center">
                    <h1 className="text-4xl font-bold text-slate-400 mb-4">Real-Time Currency Conversion</h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                        Get accurate and up-to-date currency exchange rates with our powerful converter. 
                        Perfect for travelers, businesses, and international shoppers.
                    </p>
                </div>
                
                <main className="min-h-[80vh] flex flex-col md:flex-row items-center justify-evenly align-middle">
                    <div className="flex-shrink-0 max-w-md">
                        <img
                            src="https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg"
                            alt=""
                            className="w-100 h-100 rounded-2xl"
                        />
                        <div className="mt-4 p-4 to-slate-700 rounded-lg">
                            <h3 className="text-2xl font-semibold text-slate-300 mb-2">Why Use Our Converter?</h3>
                            <ul className="list-disc pl-5 text-slate-400">
                                <li>Real-time exchange rates from trusted sources</li>
                                <li>Support for over 150 global currencies</li>
                                <li>Fast, accurate, and easy to use interface</li>
                                <li>No signup or hidden fees</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className="mb-6 max-w-96">
                            <h2 className="text-2xl font-bold text-slate-400 mb-2">Convert Currencies Instantly</h2>
                            <p className="text-slate-300 text-sm">
                                Enter an amount, select your currencies, and get instant conversions with the latest rates.
                            </p>
                        </div>
                        <div
                            className="flex bg-cover bg-no-repeat"
                            style={{
                                backgroundImage: `url('')`,
                            }}
                        >
                            <div className="w-full">
                                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 
                backdrop-blur-sm bg-white/30 shadow-lg">
                                    <form
                                        onSubmit={(e) => {
                                            e.preventDefault();
                                            convert();
                                        }}
                                    >
                                        <div className="w-full mb-1">
                                            <InputBox
                                                label="From"
                                                amount={amount}
                                                currencyOptions={options}
                                                onCurrencyChange={(currency) =>
                                                    setFrom(currency)
                                                    // setAmount(amount)
                                                }
                                                onAmountChange={(amount) =>
                                                    setAmount(amount)
                                                }
                                                selectCurrency={from}
                                                defaultCurrency="usd"
                                            />
                                        </div>
                                        <div className="relative w-full h-0.5">
                                            <button
                                                type="button"
                                                className="transition-transform duration-300 hover:scale-105 hover:shadow-xl absolute cursor-pointer left-1/2 -translate-x-1/2 -translate-y-1/2 border-0 text-white rounded-md bg-gradient-to-r from-slate-600 to-slate-700 px-2 py-0.5"
                                                onClick={swap}
                                            >
                                                swap
                                            </button>
                                        </div>
                                        <div className="w-full mt-1 mb-4">
                                            <InputBox
                                                label="To"
                                                amount={convertedAmount}
                                                currencyOptions={options}
                                                onCurrencyChange={(currency) =>
                                                    setTo(currency)
                                                }
                                                selectCurrency={to}
                                                amountDisable
                                                defaultCurrency="inr"
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            className="w-full bg-gradient-to-r from-slate-900 to-slate-700 text-white px-4 py-3 
               rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
                                        >
                                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                
                {/* How It Works Section */}
                <div className="py-12 rounded-xl my-8 bg-gradient-to-r from-slate-900 to-slate-700">
                    <h2 className="text-3xl font-bold text-center mb-8 text-white">How It Works</h2>
                    <div className="flex justify-around flex-wrap">
                        <div className="w-64 text-center p-4 border-amber-900">
                            <div className="h-16 w-16 bg-slate-700 rounded-full flex items-center justify-center text-white text-2xl mx-auto">1</div>
                            <h3 className="text-xl text-white font-semibold mt-3">Enter Amount</h3>
                            <p className="mt-2 text-white">Type in the amount you want to convert</p>
                        </div>
                        <div className="w-64 text-center p-4">
                            <div className="h-16 w-16 bg-slate-700 rounded-full flex items-center justify-center text-white text-2xl mx-auto">2</div>
                            <h3 className="text-xl text-white font-semibold mt-3">Select Currencies</h3>
                            <p className="mt-2 text-white">Choose your source and target currencies</p>
                        </div>
                        <div className="w-64 text-center p-4">
                            <div className="h-16 w-16 bg-slate-700 rounded-full flex items-center justify-center text-white text-2xl mx-auto">3</div>
                            <h3 className="text-xl text-white font-semibold mt-3">Get Result</h3>
                            <p className="mt-2 text-white">Instantly see your converted amount</p>
                        </div>
                    </div>
                </div>
                
                {/* Footer */}
                <footer className="py-6 mt-8 border-t border-slate-200">
                    <div className="text-center">
                        <p className="text-slate-600">© 2023 Currency Converter. All rights reserved.</p>
                    </div>
                </footer>
            </div>
        </>
    );
}

export default App;

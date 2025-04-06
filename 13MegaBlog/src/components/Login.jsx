import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login as storeLogin } from "../store/authSlice";
import { Button, InputField, Select } from "./index";
import { authService } from "../appwrite/auth";
import { useForm } from "react-hook-form";

function Login() {
    const { error, setError } = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();

    const login = async ({ email, password }) => {
        setError("");
        try {
            const session = await authService.login(email, password);
            if (session) {
                const userData = authService.getCurrentUser();
                if (userData) {
                    dispatch(storeLogin(userData));
                    navigate("/");
                }
            }
        } catch (e) {
            setError(e);
        }
    };

    return (
        <div className="flex items-center justify-center w-full">
            <div className="mb-2 flex justify-center">
                <span className="inline-block w-full max-w-[100px]">
                    <Login width="100%" />
                </span>
            </div>
            <h2 className="text-center text-2xl font-bold leading-tight">
                Sign in to your account
            </h2>
            <p className="mt-2 text-center text-base text-black/60">
                Don&apos;t have any account?&nbsp;
                <Link
                    to="/signup"
                    className="font-medium text-primary transition-all duration-200 hover:underline"
                >
                    Sign Up
                </Link>
            </p>
            {error && <p className="text-red-500 text-center">{error}</p>}

            <form onSubmit={handleSubmit(login)} className="mt-8">
                <div className="space-y-5">
                    <InputField
                        label="Email: "
                        type="email"
                        placeholder="Enter your email"
                        {...register("email", {
                            required: true,
                            validate: {
                                matchPatern: (value) =>
                                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                    "Email address must be a valid address",
                            },
                        })}
                    />
                    <InputField
                        label="Password: "
                        type="password"
                        placeholder="Enter your password"
                        {...register("password", {
                            required: true,
                        })}
                    />
                    <Button 
                        type="submit"
                        className="w-full"
                    >Sign in</Button>
                </div>
            </form>
        </div>
    );
}

export default Login;

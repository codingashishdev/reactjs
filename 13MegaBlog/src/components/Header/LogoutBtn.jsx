import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

function LogoutBtn() {
    const dispatch = useDispatch();
    const handleLogout = () => {
        authService
            .logout()
            .then(() => {
                dispatch(logout());
            })
    };

    return (
        <div>
            <button
                className="w-3 h-2 bg-blue-700 text-shadow-white"
                onClick={handleLogout}
            >
                Logout
            </button>
        </div>
    );
}

export default LogoutBtn;

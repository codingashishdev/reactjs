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
                alert("logout successfully")
            })
    };

    return (
        <div>
            <button
                className="w-30 h-10 bg-blue-600 text-shadow-white cursor-pointer"
                onClick={handleLogout}
            >
                Logout
            </button>
        </div>
    );
}

export default LogoutBtn;

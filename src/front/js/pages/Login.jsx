import React, { useContext } from "react";
import { Context } from "../store/appContext";


const Login = () => {


    return (
        <div className="login-box d-flex flex-column mt-3 mb-3 p-3 col-10 col-md-4 col-xs-6">
            <h1>Login</h1>
            <input
                type="text"
                className="login-input p-3"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value.toLowerCase())}
            />
            <input
                type="password"
                className="login-input p-3 mb-2 mt-3"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
            />

            <button
                type="submit"
                className="login-button mb-2 mt-3"
                onClick={() => {
                    userLogin();
                }}
            >
                GO!
            </button>
            {/* <div className={`text-danger m-2 mt-3 w-100 ${!error ? "d-none" : ""}`}>
                {error}
            </div> */}
        </div>
    );
};

export default Login;
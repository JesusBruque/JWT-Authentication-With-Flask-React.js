import React from "react";
import { loginUser } from "../../js/service/user.js";
import { useHistory } from "react-router-dom";
import "../../styles/login.css"

let email = "";
let password = "";

const Login = () => {

    let history = useHistory();

    const userLogin = async () => {
        try {
            const user = {
                email: email,
                password: password,
            };
            const response = await loginUser(user);
            const data = await response.json();
            if (response.status === 200) {
                localStorage.setItem("token", data);
            }
        } catch (err) {
            console.log("Login error: ", err);
        } finally {
            history.push("/private");
        }

    }

    return (
        <div className="login-container justify-content-center m-auto p-auto mt-3">
            <div className="title">Login</div>
            <input
                type="text"
                className="login-input p-3 form-control"
                placeholder="Email"
                onChange={(e) => email = e.target.value.toLowerCase()}
            />
            <input
                type="password"
                className="login-input p-3 mb-2 mt-3 form-control"
                placeholder="Password"
                onChange={(e) => password = e.target.value}
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
        </div>

    );
};

export default Login;
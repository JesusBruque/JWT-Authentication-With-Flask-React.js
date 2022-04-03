import React from "react";
import { loginUser } from "../../js/service/user.js";
import { useHistory } from "react-router-dom";

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
        }

    }

    return (

        <div className="login-box d-flex flex-column mt-3 mb-3 p-3 col-10 col-md-4 col-xs-6">
            <h1>Login</h1>
            <input
                type="text"
                className="login-input p-3"
                placeholder="Email"
                onChange={(e) => email = e.target.value.toLowerCase()}
            />
            <input
                type="password"
                className="login-input p-3 mb-2 mt-3"
                placeholder="Password"
                onChange={(e) => password = e.target.value}
            />

            <button
                type="submit"
                className="login-button mb-2 mt-3"
                onClick={() => {
                    userLogin();
                    history.push("/private");
                }}
            >
                GO!
            </button>

        </div>
    );
};

export default Login;
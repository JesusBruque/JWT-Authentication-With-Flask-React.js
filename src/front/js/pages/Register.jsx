import React from "react";
import { registerUser } from "../../js/service/user.js";
import { useHistory } from "react-router-dom";

let email = "";
let password = "";

const Register = () => {

    let history = useHistory();

    const handleChange = async (e) => {
        const user = {
            email: email,
            password: password
        }
        e.preventDefault()
        await registerUser(user)
        history.push("/login");
    };

    return (
        <form onSubmit={handleChange}>
            <label>Email:</label>
            <input onChange={(e) => email = e.target.value} className="form-control" id="email" type="text" name="email" />

            <label>Password:</label>
            <input onChange={(e) => password = e.target.value} className="form-control" id="password" type="text" name="password" />

            <button type="submit">Submit</button>
        </form>
    )
}

export default Register;
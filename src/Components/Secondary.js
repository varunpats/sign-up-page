import React from "react";
import { useState } from "react";
import google from '../Assets/search 1.png';
import fb from '../Assets/facebook 1.png';

const Seconday = () => {
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [errorFlag, setErrorFlag] = useState(false);
    const [successFlag, setSuccessFlag] = useState(false);

    const login = (event) => {
        event.preventDefault();
        if (password !== confirmPass){
            setErrorFlag(true);
            setSuccessFlag(false);
        }
        else{
            setSuccessFlag(true);
            setErrorFlag(false);
        }
    }

    return (
        <>
            <h1>Create Account</h1><br />
            <div style={{ display: "flex", gap: "25px" }}>
                <button className="loginBtn">
                    <img src={google} />
                    <p>Sign up with Google</p>
                </button>
                <button className="loginBtn">
                    <img src={fb} />
                    <p>Sign up with Facebook</p>
                </button>
            </div>
            <p className="separater">- OR -</p><br />
            <form onSubmit={login}>
                <input className="inputField" type="text" placeholder="Full Name" required /><br />
                <input className="inputField" type="email" placeholder="Email Address" required /><br />
                <input className="inputField" onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" required /><br />
                <input className="inputField" onChange={(e) => setConfirmPass(e.target.value)} type="password" placeholder="Confirm Password" required /><br />
                <button className="submitBtn" type="submit">Create Account</button>
            </form>
            {successFlag && <p className="successMsg">Successfully created!</p>}
            {errorFlag && <p className="errorMsg">Error: Please make sure your password and confirm password match!</p>}
        </>
    )
}

export default Seconday;
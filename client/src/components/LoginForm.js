import React, { useState } from "react";
import "./../styles/login.css";
import submitForm from "../helpers/submit";
import { useAuth } from "../contexts/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";

export default function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [formError, setFormError] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const fromPage = location.state?.from?.pathname || "/";

    function handleSubmit(e) {
        e.preventDefault();

        let errors = 0;
        if (username.length <= 0) {
            setUsernameError("Please enter an username");
            errors++;
        }

        if (password.length <= 0) {
            setPasswordError("Please enter a password");
            errors++;
        }

        if (errors) {
            setFormError('Oops! An error occurred.');
            return;
        }

        submitForm({
            username: username,
            password: password
        }).then((response) => {
            console.log(response);
            const json = response.json();
            console.log(json);

            json.then((data) => {
                console.log(data);
                if (data.user === null) {
                    // TODO: user pass false case
                    setUsernameError('Username does not exist');
                } else {
                    if (!data.correctPass) {
                        setPasswordError('Password does not match');
                    } else {
                        // login success
                        login(data.user);
                        navigate(
                            fromPage,
                            { replace: true }
                        );
                    }
                }
            });
        });
    }

    return (
        <main className="ssoLogin">
            <p className="error">{formError}</p>
            <form onSubmit={handleSubmit} className="ssoLoginForm">
                <div className="field">
                    <label htmlFor="username">Username</label>
                    <input 
                        type="text" 
                        name="username" 
                        id="username"
                        value={username}
                        onChange={(e) => {
                            setUsername(e.target.value);
                        }}
                    />
                    <small className="error">{usernameError}</small>
                </div>
                <div className="field">
                    <label htmlFor="pwd">Password</label>
                    <input 
                        type="password" 
                        name="password" 
                        id="pwd"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                    <small className="error">{passwordError}</small>
                </div>
                <div className="btn">
                    <input type="submit" value="Submit"/>
                    <input type="reset" value="Clear"/>
                </div>
            </form>
        </main>
    );
}
import React, { useState } from "react";

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
    }

    function valid() {
        return (username.length > 0 && password.length > 0);
    }

    return (
        <div className="Login">
            <form action="" method="post" onSubmit={handleSubmit}>
                <div>
                    <label for="username">Username</label>
                    <input 
                        type="text" 
                        name="username" 
                        id="username"
                        value={username}
                        onChange={(e) => {
                            setUsername(e.target.value);
                        }}
                    />
                </div>
                <div>
                    <label for="pwd">Password</label>
                    <input 
                        type="password" 
                        name="password" 
                        id="pwd"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                </div>
                <div>
                    <button 
                        type="submit"
                        disabled={!valid()}
                    >Submit</button>
                    <button type="reset">Clear</button>
                </div>
            </form>
        </div>
    );
}
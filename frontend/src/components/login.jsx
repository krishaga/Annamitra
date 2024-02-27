import React from 'react'

function Login(){
    return <div>
            <div>
                    Welcome Back. Log In Below
            </div>
            <div>
                <input
                    onChange={(e) => {
                        setUsername(e.target.value);
                    }}
                    label="Username"
                    placeholder="Username"
                />
                <br /><br />
                <input
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    label="Password"
                    type="password"
                    placeholder="Password"
                />
            </div>
    </div>
}

export default Login
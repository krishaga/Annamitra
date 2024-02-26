// import Button from '@mui/material/Button';
// import Card from '@mui/material/Card';
// import { TextField, Typography } from '@mui/material';
import React from 'react'
function Login(){
    return <div>
        <div style={{display:"flex", justifyContent:"center"}}>
            <div style={{
                paddingTop:200,
                paddingBottom:10
            }}>
                Welcome Back. Log In Below
            </div>
        </div>
        <div style={{display:"flex", justifyContent:"center"}}>
        <div  style={{
                width:400,
                padding:20,
                // paddingBottom: 200,
            }}>
                    <input 
                        fullWidth={true}
                        id="outlined-basic" 
                        label="Username" 
                        variant="outlined" />
                    <br />
                    <br />
                    <input 
                        fullWidth={true}
                        id="outlined-basic" 
                        label="Password" 
                        variant="outlined" />
                    <br />
                    <br />
                    <div>Log In</div>
                </div>
        </div>
    </div>
}

export default Login
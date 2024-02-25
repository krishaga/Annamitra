import React from "react";
function Signup() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    return (
        <div>
            Krish
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div
                    style={{
                        paddingTop: 200,
                        paddingBottom: 10,
                    }}
                >
                    Welcome To Coursera. Sign Up Below
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div
                    variant="outlined"
                    style={{
                        width: 400,
                        padding: 20,
                        // paddingBottom: 200,
                    }}
                >
                    <input
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        fullWidth={true}
                        label="Username"
                        variant="outlined"
                    />
                    <br />
                    <br />
                    <input
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                        fullWidth={true}
                        // id="password"
                        label="Password"
                        variant="outlined"
                        type="password"
                    />

                    <br />
                    <br />
                    {/* <TextField 
                        fullWidth={true}
                        id="outlined-basic" 
                        label="FirstName" 
                        variant="outlined" />
                    <br />
                    <br />
                    <TextField 
                        fullWidth={true}
                        id="outlined-basic" 
                        label="LastName" 
                        variant="outlined" />
                    <br />
                    <br />
                    <TextField 
                        fullWidth={true}
                        id="outlined-basic" 
                        label="Email-id" 
                        variant="outlined" />
                    <br />
                    <br />
                    <TextField 
                        fullWidth={true}
                        id="outlined-basic" 
                        label="Mobile No" 
                        variant="outlined" />
                    <br />
                    <br /> */}
                    <div
                        size={"Larger"}
                        variant="contained"
                        onClick={() => {
                            fetch("http://localhost:3000/admin/signup", {
                                method: "POST",
                                body: JSON.stringify({
                                    username: email,
                                    password: password,
                                }),
                                headers: {
                                    "Content-type": "application/json",
                                },
                            })
                                .then((res) => res.json())
                                .then((data) => {
                                    localStorage.setItem("token", data.token);
                                    // console.log(data);
                                });
                        }}
                    >
                        Sign Up
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;

// import axios from "axios";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Signup() {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const navigate = useNavigate();
//     const [user, setUser] = useState(userState);

//     const newSignup = () => {
//         axios
//             .post(`${BASE_URL}/admin/signup`, {
//                 username: email,
//                 password: password,
//             })
//             .then((response) => {
//                 localStorage.setItem("token", response.data.token);
//                 setUser({
//                     userEmail: email,
//                     isLoading: false,
//                 });
//                 navigate("/courses");
//             });
//     };

//     if (user.userEmail) {
//         return (
//             <Typography variant="h4" align="center" style={{ marginTop: 160 }}>
//                 You've already registered.
//             </Typography>
//         );
//     } else {
//         return (
//             <div style={{ paddingTop: "20vh" }}>
//                 <center>
//                     <Typography variant="h5">
//                         Welcome to COURZERO! Sign up here.
//                     </Typography>
//                     <br />
//                     <Card
//                         variant="outlined"
//                         style={{ width: 400, padding: "2%" }}
//                     >
//                         <TextField
//                             fullWidth
//                             label="Email"
//                             variant="outlined"
//                             type={"text"}
//                             onChange={(e) => setEmail(e.target.value)}
//                         />
//                         <br />
//                         <br />
//                         <TextField
//                             fullWidth
//                             label="Password"
//                             variant="outlined"
//                             type={"text"}
//                             onChange={(e) => setPassword(e.target.value)}
//                         />
//                         <br />
//                         <br />
//                         <Button variant="contained" onClick={Signup}>
//                             Signup
//                         </Button>
//                         <br />
//                         <br />
//                         <Typography fontSize={"caption"} variant="h6">
//                             Already a user? <a href="/login">Login</a>
//                         </Typography>
//                     </Card>
//                 </center>
//             </div>
//         );
//     }
// }

// export default Signup;

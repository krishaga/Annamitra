import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [user, setUser] = useState(userState);

    const newSignup = () => {
        axios
            .post(`${BASE_URL}/admin/signup`, {
                username: email,
                password: password,
            })
            .then((response) => {
                localStorage.setItem("token", response.data.token);
                setUser({
                    userEmail: email,
                    isLoading: false,
                });
                navigate("/courses");
            });
    };

    if (user.userEmail) {
        return (
            <Typography variant="h4" align="center" style={{ marginTop: 160 }}>
                You've already registered.
            </Typography>
        );
    } else {
        return (
            <div style={{ paddingTop: "20vh" }}>
                <center>
                    <Typography variant="h5">
                        Welcome to COURZERO! Sign up here.
                    </Typography>
                    <br />
                    <Card
                        variant="outlined"
                        style={{ width: 400, padding: "2%" }}
                    >
                        <TextField
                            fullWidth
                            label="Email"
                            variant="outlined"
                            type={"text"}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <br />
                        <br />
                        <TextField
                            fullWidth
                            label="Password"
                            variant="outlined"
                            type={"text"}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <br />
                        <br />
                        <Button variant="contained" onClick={Signup}>
                            Signup
                        </Button>
                        <br />
                        <br />
                        <Typography fontSize={"caption"} variant="h6">
                            Already a user? <a href="/login">Login</a>
                        </Typography>
                    </Card>
                </center>
            </div>
        );
    }
}

export default Signup;

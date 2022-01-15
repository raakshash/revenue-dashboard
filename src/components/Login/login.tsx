import React from "react";
// import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import "./login.css";

interface Props {
    setToken: (token: any) => void;
    authToken: string;
}

const Login: React.FC<Props> = ({ setToken, authToken }) => {
    const loginUser = async () => {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        await signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token: any = credential?.accessToken;
                setToken(token);
                // The signed-in user info.
                const user = result.user;
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        loginUser();
    }

    return (
        <div className="Login">
            < div className="card">
                < div className="card-body" >
                    <div className="wrap">
                        {/* <Form onSubmit={handleSubmit}> */}
                        <Button size="lg" type="submit" className="form-control google" onClick={handleSubmit}>
                            Login with Google
                        </Button>
                        <Button className="form-control facebook" size="lg" type="submit">
                            Login with Facebook
                        </Button>
                        {/* </Form> */}
                    </div>
                </div >
            </div >
        </div>
    );
}

export default Login;
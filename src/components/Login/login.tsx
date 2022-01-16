import React from "react";
import { useDispatch, useStore } from "react-redux";
import { Button } from "reactstrap";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { getRevenueData } from "../../actions/revenue/getRevenueData";
import { AuthConsumer } from "../Auth/Auth";

interface Props {
    setToken: (token: any) => void;
}

const Login: React.FC<Props> = ({ setToken }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const state = useStore().getState();
    const [loading, setLoading] = React.useState(false);
    const loginUser = async () => {
        setLoading(true);
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        await signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token: any = credential?.accessToken;
                setToken(token);
                setLoading(false);
                getRevenueData(token, dispatch, state).then(() => {
                    navigate("/dashboard");
                });
            }).catch((error) => {
                console.error(error);
            });
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        loginUser();
    }

    return (
        <AuthConsumer>
            <div className="Login">
                < div className="card">
                    < div className="card-body" >
                        <div className="wrap">
                            <Button
                                size="lg"
                                type="submit"
                                className="form-control google"
                                onClick={handleSubmit}
                                disabled={loading}
                            >
                                {loading ? "Logging..." : "Login with Google"}
                            </Button>
                            <Button
                                className="form-control facebook"
                                size="lg"
                                type="submit"
                                disabled={loading}
                            >
                                Login with Facebook
                            </Button>
                        </div>
                    </div >
                </div >
            </div>
        </AuthConsumer>
    );
}

export default Login;
import React from "react";
import { Button, Label } from "reactstrap";
import "./login.css";
import { AuthConsumer } from "../Auth/Auth";
import { useProvideAuth } from "../../hooks/useProvideAuth";

interface Props {
    setToken: (token: any) => void;
}

const Login: React.FC<Props> = ({ setToken }) => {
    const [loading, setLoading] = React.useState(false);
    const { signin } = useProvideAuth(setToken);
    const loginUser = async () => {
        setLoading(true);
        signin().then(() => {
            setLoading(false);
        })
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
                            <h2>Welcome to Dashboard</h2>
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
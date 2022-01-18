import React from "react";
import { Button } from "reactstrap";
import google from "../../assets/images/google.svg";
import "./Login.css";
import { AuthConsumer } from "../Auth/Auth";
import { useProvideAuth } from "../../hooks/useProvideAuth";
import { LoginComponent, LoginComponentProps } from "react-login-component-raakshash";
import { GrGoogle} from "react-icons/gr";

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

    const googleAuthButton = (<Button
        size="lg"
        type="submit"
        className="form-control google"
        onClick={handleSubmit}
        disabled={loading}
    >
        <span>
            {loading ? "Logging..." : "Login with Google"}
        </span>
    </Button>)
    const loginCompProps: LoginComponentProps = {
        authFunctions: {
            googleAuth: loginUser
        },
        svgs: {
            googleSvg: google,
        },
        logoText: "Revenue Dashboard",
        loginInfo: "To explore the revenue details, please login.",
        loginWelcomeText: "Welback Back to Revenue Dashboard!",
        signupInfo: "To explore the revenue details, please register.",
        authButtons: googleAuthButton
    }

    return (
        <AuthConsumer>
            {/* <div className="Login">
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
            </div> */}
            <LoginComponent {...loginCompProps} />
        </AuthConsumer>
    );
}

export default Login;
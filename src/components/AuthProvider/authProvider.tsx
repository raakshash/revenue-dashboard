import React from "react";
import { useNavigate } from "react-router-dom";
import useToken from "../../hooks/useToken";
import Login from "../Login/login";

interface Props {
    children: React.ReactElement;
}

const AuthProvider: React.FC<Props> = ({ children }) => {

    const { token, setToken } = useToken();
    const navigate = useNavigate();
    if (!!token) {
        navigate("/dashboard");
    } else {
        return (
            <Login setToken={setToken} authToken={token} />
        );
    }


    return (
        <>
            {children}
        </>
    );

}

export default AuthProvider;
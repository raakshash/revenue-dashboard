import { GoogleAuthProvider } from "firebase/auth";
import React from "react";
import { useMatch, useNavigate, useParams } from "react-router-dom";
import useToken from "../../hooks/useToken";

interface Props {
    value: any;
}

interface AuthProps {
    token: string;
}

const AuthContext = React.createContext({ token: "" });

export const AuthProvider: React.FC<Props> = ({ value, children }) => {
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );

}

const Authentication: React.FC<AuthProps> = ({ token, children }) => {
    const navigate = useNavigate();
    const logoutMatch = useMatch({
        path: "/logout"
    });
    const loginMatch = useMatch({
        path: "/"
    })
    React.useEffect(() => {
        if (!token && !logoutMatch) {
            navigate("/");
        }
        if (!!token && (!!loginMatch && loginMatch?.pathname === "/" ||
            !!logoutMatch && logoutMatch?.pathname === "/logout")) {
            navigate("/dashboard");
        }
    }, []);

    return (
        <>
            {children}
        </>
    );
}

export const AuthConsumer: React.FC = ({ children }) => {
    return (
        <AuthContext.Consumer>
            {({ token }) => <Authentication token={token}>{children}</Authentication>}
        </AuthContext.Consumer>
    );
}


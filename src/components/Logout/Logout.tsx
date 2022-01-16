import React from "react";
import { Link } from "react-router-dom";
import { AuthConsumer } from "../Auth/Auth";


const Logout: React.FC = () => {
    return (
        <AuthConsumer>
            <p>You are logged out now</p>
            <Link to={"/"}>Click here to go to login page</Link>
        </AuthConsumer>
    );
}

export default Logout;

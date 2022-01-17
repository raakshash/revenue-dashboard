import React, { useState } from "react";
import { useDispatch, useStore } from "react-redux";
import { getRevenueData } from "../../actions/revenue/getRevenueData";
import useToken from "../../hooks/useToken";
import Dashboard from "../../components/Dashboard/Dashboard";
import { Revenue } from "./constants";
import { AuthConsumer } from "../../components/Auth/Auth";
import { getDashboardProps } from "./util";
import { useProvideAuth } from "../../hooks/useProvideAuth";

interface Props {
    setToken: (value: any) => void
}

const DashboardPage: React.FC<Props> = ({ setToken }) => {
    const [isRevenueReady, setIsRevenueReady] = useState(false);
    const { token } = useToken();
    const dispatch = useDispatch();
    const store = useStore();
    const state: any = store?.getState();

    React.useEffect(() => {
        if (Object.keys(state?.revenue || {}).length === 0) {
            getRevenueData(token, dispatch, state).then(() => {
                setIsRevenueReady(true);
            });
        }
    }, []);

    const revenueData: { [key: string]: Revenue } = state?.revenue || [];

    const { signout } = useProvideAuth(setToken);
    const handleLogout = (event: any) => {
        event.preventDefault();
        signout();
    }

    return (
        <AuthConsumer>
            <Dashboard
                handleLogout={handleLogout}
                {...getDashboardProps(isRevenueReady, revenueData)}
            />
        </AuthConsumer>
    );
}

export default DashboardPage;
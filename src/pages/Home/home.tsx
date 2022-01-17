import React from 'react';
import Dashboard from '../DashboardPage/DashboardPage';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { StoreContext } from "redux-react-hook";
import { combineReducers, createStore } from "redux";
import Login from '../../components/Login/Login';
import useToken from '../../hooks/useToken';
import { initializeApp } from "firebase/app";
import { RevenueReducer } from '../../reducers/revenueReducer';
import Logout from '../../components/Logout/Logout';
import { AuthProvider } from "../../components/Auth/Auth";
import { firebaseConfig } from "../../config/config";

const Home: React.FC = () => {
  // Initialize Firebase
  initializeApp(firebaseConfig);

  const { token, setToken } = useToken();
  const store = createStore(
    combineReducers({ revenue: RevenueReducer })
  )

  return (
    <ReduxProvider store={store}>
      <StoreContext.Provider value={store}>
        <AuthProvider value={{ token }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login setToken={setToken} />} />
              <Route path="dashboard" element={<Dashboard setToken={setToken} />} />
              <Route path="logout" element={<Logout />} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </StoreContext.Provider>
    </ReduxProvider>
  );
}

export default Home;

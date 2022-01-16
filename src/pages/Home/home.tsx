import React from 'react';
import Dashboard from '../DashboardPage/DashboardPage';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { StoreContext } from "redux-react-hook";
import { combineReducers, createStore } from "redux";
import Login from '../../components/Login/Login';
import useToken from '../../hooks/useToken';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { RevenueReducer } from '../../reducers/revenueReducer';
import Logout from '../../components/Logout/Logout';
import { AuthProvider } from "../../components/Auth/Auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZsAI3-piwmT_caZrDuO9cgP_-7MxpYqw",
  authDomain: "revenue-dashboard-d407a.firebaseapp.com",
  projectId: "revenue-dashboard-d407a",
  storageBucket: "revenue-dashboard-d407a.appspot.com",
  messagingSenderId: "600260579595",
  appId: "1:600260579595:web:0a1543e8bbda64d8cfd20e",
  measurementId: "G-GJGSVNL18J"
};



function Home() {
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
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="logout" element={<Logout />} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </StoreContext.Provider>
    </ReduxProvider>
  );
}

export default Home;

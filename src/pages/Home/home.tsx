import React from 'react';
import Dashboard from '../Dashboard/dashboard';
import Analytics from '../../components/Analytics/analytics';
import { Route, Routes, BrowserRouter } from "react-router-dom";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection, updateDoc, setDoc, doc } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { companies } from "./constants";
import Login from '../../components/Login/login';
import useToken from '../../hooks/useToken';
import AuthProvider from '../../components/AuthProvider/authProvider';
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
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore();

  // try {
  // addDoc(collection(db, "revenue-dashboard"), { company: "Apple", country: "USA" });
  // setDoc(doc(db, "revenue-dashboard", "USA"), companies[0]);
  // companies.forEach(async (data) => {
  // const docRef = await addDoc(collection(db, "monthly-revenue"), data);
  // console.log("Document written with ID: ", docRef.id);
  //     setDoc(doc(db, "companies", data.company), data);
  //   });
  // } catch (e) {
  //   console.error("Error adding document: ", e);
  // }

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="analytics" element={<Analytics />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default Home;

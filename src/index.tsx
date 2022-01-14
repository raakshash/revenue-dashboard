import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './pages/Home/home';
import ReactGA from 'react-ga';
const TRACKING_ID = "UA-12341234-1"; // YOUR_OWN_TRACKING_ID

const init = () => {
  ReactGA.initialize(TRACKING_ID);
  ReactDOM.render(
    <React.StrictMode>
      <Home />
    </React.StrictMode>,
    document.getElementById('revenue-dashboard')
  );
}

init();


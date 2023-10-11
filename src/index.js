import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import App from './App';
import Interests from './Interests';
import { BrowserRouter as Router} from "react-router-dom";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";


ReactDOM.render(
  <>
  <Router >
    <App />
    <Interests/>
  </Router>
  
  </>,
  document.getElementById('root')
);


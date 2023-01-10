import React from "react";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import { Route } from 'react-router-dom';
import Home  from './components/Home';
import Logobar from './components/Logobar';
import Info from './components/Info';
import WebDevProcess from "./components/webdevprocess/Webdevproces";

export function App() {
  return (
      <Router>
          <Routes>
            <Route path="/aboutus" element={<p>Sign in page</p>}>
            </Route>
            <Route path="/contactus" element={<p>Sign up page</p>}>
            </Route>
            <Route path="/" element={<Home />}>
            </Route>
          </Routes>
          <Logobar />
          <Info />
          <WebDevProcess />
      </Router>
  );
}
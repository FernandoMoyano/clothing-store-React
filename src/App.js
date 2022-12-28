import React from "react";
//import react router dom
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import pages
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
//import components
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
	return <div className="overflow-hidden">
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </Router>
  </div>;
};

export default App;

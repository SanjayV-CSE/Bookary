import React from "react";
import { BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import Home from "./Pages/Home.jsx";
import AboutUs from "./Pages/AboutUs.jsx";
import ContactUs from "./Pages/ContactUs.jsx";
import NotFound from "./Pages/NotFound.jsx";
import Signup from "./Pages/Signup.jsx";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path='/signup' element={<Signup />} />
        <Route path="*" element ={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;

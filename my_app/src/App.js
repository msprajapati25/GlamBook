import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Services from "./pages/Services";
import About from "./pages/About";
import Appcart from "./pages/Appcart";
import Appointment from "./pages/Appointment";
import ContactUs from "./pages/ContactUs";
import ServiceCategory from "./pages/ServiceCategory";
import Loginsignup from "./pages/Loginsignup1";
import menbanner from "./components/Assets/banner_men.png"
import womenbanner from "./components/Assets/womenbanner.jpg"

function app() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Appointment />} />
          <Route path="/Men" element={<ServiceCategory banner={menbanner} category="Men" />} />
          <Route path="/Women" element={<ServiceCategory banner={womenbanner} category="Women" />} />
          <Route path="/service" element={<Services />}>
            <Route path=":ServiceId" element={<Services />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />

          <Route path="/app" element={<Appcart />}/>
            <Route path="/login" element={<Loginsignup />} />
          
        </Routes>
        
      </BrowserRouter>
     
    </>
  );
}

export default app;

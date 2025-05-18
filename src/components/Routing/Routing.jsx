import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ReqandTrain from '../../Pages/ReqandTrain/ReqandTrain';
import HomePage from '../../Pages/HomePage/HomePage';
import ServiceDetails from '../ServiceDetails/ServiceDetails';

// Create some simple page components
const About = () => <div><h1>About Us</h1><p>Learn about our company</p></div>;
const Contact = () => <div><h1>Contact</h1><p>Get in touch with us</p></div>;
const NotFound = () => <div><h1>404</h1><p>Page not found</p></div>;

const Routing = () => {
  return (
      <div>
        {/* Route configuration */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/recruitment-and-training" element={<ReqandTrain />} />
          <Route path="/services/:serviceId" element={<ServiceDetails/>} />
          <Route path="*" element={<NotFound />} /> {/* Catch-all route */}
        </Routes>
      </div>  
  );
};

export default Routing;
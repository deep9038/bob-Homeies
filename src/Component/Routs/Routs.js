import React from "react";
import { Routes, Route } from "react-router-dom";
import Charts from "../../pages/Charts";
import Dashboard from "../../pages/Dashboard";


const Routs = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/Charts" element={<Charts/>} />
        
      </Routes>
    </div>
  );
};

export default Routs;

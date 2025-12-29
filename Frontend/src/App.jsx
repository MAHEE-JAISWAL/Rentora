import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Dresses from "./pages/Dresses";
import Furniture from "./pages/Furniture";
import Electronics from "./pages/Electronics";
import Sports from "./pages/Sports";
import Vehicle from "./pages/Vehicle";
import Babym from "./pages/Babym";
import Tool from "./pages/Tool";
import Event from "./pages/Event";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route path="/dresses" element={<Dresses />} />
        <Route path="/furniture" element={<Furniture />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/vehicle" element={<Vehicle />} />
        <Route path="/babym" element={<Babym />} />
        <Route path="/tool" element={<Tool />} />
        <Route path="/event" element={<Event />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./components/newuser/Form1";
import "./App.css";
import NextFormPage from "./components/newuser/Details";
import Navbar from "./components/newuser/Navbar";
import DataTable from "./components/newuser/table";
const App = () => {
  return (
   
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<Navbar />} />
            <Route path="/form" element={<Form />} />
            <Route path="/details" element={<NextFormPage />} />
            <Route path="/table" element={<DataTable />} />

            {/* <Route path="/message" element={<Message />} />
            <Route path="/productapi" element={<ProductAPI />} /> */}
          
          </Routes>
        </div>
      </BrowserRouter>
  
  );
};

export default App;

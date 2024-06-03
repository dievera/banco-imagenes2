//import "./styles.css";
import React from "react";
//import "bootstrap/dist/css/bootstrap.css";
//import Card from "./components/Card";
//import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter, Link, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <header>
        <Navbar />
      </header>
    </BrowserRouter>
  );
}

export default App;

/*export default function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}*/

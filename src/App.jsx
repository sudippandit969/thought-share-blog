import React from "react";
import "./App.css"
import NavBar from "./components/Navbar";
import BodyPage from "./components/BodyPage";

const App = () => {
  return (
    <div className="app-container">
      <NavBar />
      <BodyPage />
    </div>
  );
};

export default App;

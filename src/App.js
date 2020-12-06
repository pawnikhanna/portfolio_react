import React from "react";
import './App.css';
import Header from "./components/Top";
import Nav from "./components/Nav";
import About_me from "./components/AboutMe";
import Certificates from "./components/Certifications";
import Achievements from "./components/Achievements";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header/>
      <Nav />
      <About_me />
      <Certificates />
      <Achievements />
      <Footer />
    </div>
  );
}

export default App;

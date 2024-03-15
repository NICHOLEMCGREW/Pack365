import React, { useState } from 'react';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Events from "./components/Events";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
    const [currentView, setCurrentView] = useState("home");
  
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <Home />
            <About />
            <Events />
            <Contact />
            <Footer />
        </div>
    );
};
  
export default App;

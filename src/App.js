import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <Router>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/react-portfolio" component={Home} />
        <Route exact path="/about" component={Home} />
        <Route exact path="/projects" component={Projects} />
    </Router>
    <Footer />
    </>
  );
}

export default App;

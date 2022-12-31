import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import ContactMe from "./components/Contact/ContactMe";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
   <Router>
     <div className="App">
      <Navbar />

    </div>
      <Routes>
        <Route exact path='/' 
          element={< Home />}></Route>
          <Route exact path='/about' 
          element={< About />}></Route>
          <Route exact path='/projects' 
          element={< Projects />}></Route>
          <Route exact path='/contact_me' 
          element={< ContactMe />}></Route>
    </Routes>
    <Footer />
   </Router>
  );
}

export default App;

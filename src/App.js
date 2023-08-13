import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import SignUp from './components/Signup';
import ToDoList from './components/ToDoList';



const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todolist" element={<ToDoList />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Contact/>
    </Router>
  );


  // ---------------------------footer-----------------------


};

export default App;

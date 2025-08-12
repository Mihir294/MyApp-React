import React, { use } from 'react'
import { useState,useEffect } from 'react'
import Faq from './components/Faqs'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Menu from './components/menuItems'
import Form from './components/form'
import BillSummary from './components/billSummary'
import SubmitPage from './components/submit'
import Login from './components/login' 
import './App.css' 
import {
  BrowserRouter as Router,
  Routes ,
  Route
} from "react-router-dom";

function App() {
  const [valueName, setvalueName] = useState();


useEffect(() => {
  const hasVisited = localStorage.getItem("hasVisited");

  if (!hasVisited) {
    alert("Welcome to our restaurant! Please login to continue.");
    localStorage.setItem("hasVisited", "true");
  }
}, []);


  return (
    <Router>
          <div className="main">
      <NavBar/>
     

      <div className="comp">
         <Routes>
           <Route path="/" element={<Home />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/home" element={<Home />} />
          <Route path="/booking" element={<Form valueName={valueName} setValueName={setvalueName} /> } />
          <Route path="/home" element={<Home />} /> 
          <Route path="/submit" element={<SubmitPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/billSummary" element={<BillSummary valueName={valueName} />} />
          
     
        </Routes>
</div>

    </div>
  </Router>
  );

}


export default App;

import logo from './logo.svg';
import './App.css';
import { Home } from './Components/Home';
import React,{useState,useEffect} from 'react';
import {
  BrowserRouter as Router,

  Route,

  Routes
} from "react-router-dom";
import { About } from './Components/About/About';
import { Resume } from './Components/Resume/Resume';
import { Services } from './Components/Services/Services';
import { Contact } from './Components/Contact/Contact';
let a = [10,1,2,8,4,7,6]
console.log(a.length)
  let max ;
  let min;
  let value;

for(let i = 0 ; i < a.length; i++)
  {
   
    if(a[i] < a[(i+1) % a.length])
    {
      max = a[(i+1) % a.length]
    }
    if(a[i] > a[(i+1) % a.length])
    {
      min = a[(i) % a.length]
    }
    
  }
  console.log(max)
  console.log(min)
function App() {
 
  const [state, setstate] = useState(1)
  const dataupdate = ()=>{
    
    setstate(state+1) 
   
  }
   
  
 
  return (
    <div >

     
       {/* <Route path="/Home" element={ <Home/>}/> */}
     
      <Router>
         <Home/>
        <Routes>
        <Route path="/" element={<Home />}/>
          <Route path="/About" element={< About />}/>
          <Route path="/Resume" element={<Resume/>}/>
          <Route path="/Services" element={<Services/>}/>
          <Route path="/Contact" element={<Contact/>}/>
         </Routes>
      </Router>
  
     </div>
  );
}

export default App;

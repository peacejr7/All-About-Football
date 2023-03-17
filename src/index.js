import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
// import About from './components/About.jsx'
import Create from './Components/Create.jsx'
import Contact from './Components/Contact.jsx'
import Layout from './Components/Layout.jsx'
import Users from './Components/Users.jsx'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <Routes>
          <Route path='/' element={<App/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/Layout' element={<Layout/>}/>
          <Route path='/CreateTeam' element={<Create/>}/>
          <Route path='/OurUsers' element={<Users/>}/>
          
          
        </Routes>
  </BrowserRouter>
   
 </React.StrictMode>
);


reportWebVitals();

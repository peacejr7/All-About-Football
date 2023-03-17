import './App.css';
import React,{Component} from 'react';

import Navbar from './Components/Navbar.jsx'
import Footer from './Components/Footer.jsx'

class App extends Component {
  render(){
    return (
      <div className="App">
     
       <Navbar/>
       
  <div class="container my-24 px-6 mx-auto ">

    
    <section class="mb-32  text-center">

      <div class="flex justify-center">
        <div class="max-w-[800px]">
          <h2 class="text-gray-900 text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
            Wanna Know more about your football team? <br />
            <span class="text-blue-600">sign in for more...</span>
          </h2>
          <p class="text-gray-900 text-lg">
            You will ind information about the teams you support across Europe top 5 leagues.
          </p>
        </div>
      </div>

    </section>
    
    
  </div>
  
       <Footer/>
      </div>
    )
  }
}

export default App;

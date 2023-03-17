import React, { Component } from 'react';

class Navbar extends Component {
    render(){
      return (
      <nav className='p-6 shadow md:flex md:items-center md:justify-between bg-gray-800 '>
          <div className='flex'>
          <img class="h-[100px] w-[100px]  rounded-full " src="https://www.rebelsport.com.au/on/demandware.static/-/Sites-srg-internal-master-catalog/default/dw85642ff2/hof/230125-REBEL-Football-3D-Adidas-Oceaunz-r1.png" alt="#"/>
          <h1 className='py-5 text-white text-3xl md:text-6xl xl:text-5xl font-bold tracking-tight mb-12 text-center'>Club's Info</h1>
          </div>
          <ul className='md:flex md:items-center z-[-1] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500'>
             <li className='mx-5 my-6 md:my-0 text-white '>
             <a className='text-xl hover:text-yellow-200 duration-500' href='/'>HOME</a>
             </li>
             <li className='mx-5 my-6 md:my-0 text-white'>
             <a className='text-xl hover:text-yellow-200 duration-500' href='/Layout'>ABOUT</a>
             </li>
             <li className='mx-5 my-6 md:my-0 text-white'>
             <a className='text-xl hover:text-yellow-200 duration-500 text-white' href='/Services'>SERVICES</a>
             </li>
             <li className='mx-5 my-6 md:my-0 text-white'>
             <a className='text-xl hover:text-yellow-200 duration-500 text-white' href='/Contact'>CONTACT US</a>
             </li>
             <li>
					<a href="/Layout"
						class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:text-yellow-200 dark:hover:text-yellow-200">
						<svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
							fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd"
								d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
								clip-rule="evenodd"></path>
						</svg>
						<span class="flex-1 ml-3 whitespace-nowrap">Sign In</span>
					</a>
				</li>
             
          </ul>
      </nav>
      )
    }
  }
  export default Navbar;
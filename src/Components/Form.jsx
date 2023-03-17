import React, {useState} from "react";


function Form() {
  const [name, setName]=useState('')
  const [stadium, setStadium]=useState('')
  const [country, setCountry]=useState('')
  const [city, setCity]=useState('')
  const [manager, setManager]=useState('')
  const [league, setLeague]=useState('')
  const [founded, setFounded]=useState()
  const [logo, setLogo]=useState('')
  
 const handleSubmit=(e)=>{
 e.preventDefault();
 
 fetch('http://localhost:400/Teams', {
     method:'POST',
     headers:{'content-type':'application.json'},
     body:JSON.stringify({
         name:name,
         Stadium:stadium,
         Country:country,
         City:city,
         Manager:manager,
         League:league,
         Founded:founded,
         Logo:logo
     })
     
 })
 }
  return (
    <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md bg-gray-200">
    <h2 class="text-lg text-center font-semibold text-[#000080] capitalize text-white">Adding a New Football Team</h2>

    <form onSubmit={handleSubmit}>
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
                <label class="text-[#000080] text-[#000080]" for="name">Team Name</label>
                <input id="name" onChange={(e)=>setName(e.target.value)} type="text" class="block w-full px-4 py-2 mt-2 text-[#000080] bg-white border border-gray-500 rounded-md bg-gray-800 text-gray-300 border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>

            <div>
                <label class="text-[#000080] text-[#000080]" for="stadium">Stadium</label>
                <input id="stadium" onChange={(e)=>setStadium(e.target.value)} type="text" class="block w-full px-4 py-2 mt-2 text-[#000080] bg-white border border-gray-500 rounded-md bg-gray-800 text-gray-300 border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>

            <div>
                <label class="text-[#000080] text-[#000080]" for="country">Country</label>
                <input id="country" onChange={(e)=>setCountry(e.target.value)} type="text" class="block w-full px-4 py-2 mt-2 text-[#000080] bg-white border border-gray-500 rounded-md bg-gray-800 text-gray-300 border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>

            <div>
                <label class="text-[#000080] text-[#000080]" for="city">City</label>
                <input id="city" onChange={(e)=>setCity(e.target.value)} type="text" class="block w-full px-4 py-2 mt-2 text-[#000080] bg-white border border-gray-500 rounded-md bg-gray-800 text-gray-300 border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>
            <div>
                <label class="text-[#000080] text-[#000080]" for="manager">Manager</label>
                <input id="manager" onChange={(e)=>setManager(e.target.value)} type="text" class="block w-full px-4 py-2 mt-2 text-[#000080] bg-white border border-gray-500 rounded-md bg-gray-800 text-gray-300 border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>

            <div>
                <label class="text-[#000080] text-[#000080]" for="league">League</label>
                <input id="league" onChange={(e)=>setLeague(e.target.value)} type="text" class="block w-full px-4 py-2 mt-2 text-[#000080] bg-white border border-gray-500 rounded-md bg-gray-800 text-gray-300 border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>

            <div>
                <label class="text-[#000080] text-[#000080]" for="founded">Founded in?</label>
                <input id="founded" onChange={(e)=>setFounded(e.target.value)} type="number" class="block w-full px-4 py-2 mt-2 text-[#000080] bg-white border border-gray-500 rounded-md bg-gray-800 text-gray-300 border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>
            <div>
                <label class="text-[#000080] text-[#000080]" for="logo">Logo</label>
                <input id="logo" onChange={(e)=>setLogo(e.target.value)} type="text" class="block w-full px-4 py-2 mt-2 text-[#000080] bg-white border border-gray-500 rounded-md bg-gray-800 text-gray-300 border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>
        </div>

        <div class="flex justify-center mt-6">
            <button type='submit' class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-[#000080] rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
        </div>
    </form>
</section>
           
  )
}

export default Form

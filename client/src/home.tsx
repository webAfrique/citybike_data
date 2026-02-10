import { useState, useEffect, FormEvent } from 'react'
import { Link, redirect } from 'react-router'
import './App.css'

function Home() {
    const [stations, setStations] = useState(Array<string>)
  const [search, setSearch] = useState("")
  const [searchResult, setSearchResults] = useState(Array<string>)

  useEffect(() => {
    fetch('http://localhost:3000/stations/all')
    .then((response) => response.json())
    .then((data) => {setStations(data)})
    .catch((error) => console.log(error));
  }, [])

  function handleSearch(event: FormEvent) {
    //setSearch((event.target as HTMLInputElement).value)
    let searchStr = (event.target as HTMLInputElement).value
    if(searchStr === "") return setSearchResults([])
    setSearchResults(stations.filter((station) => station.toLowerCase().includes(searchStr.toLowerCase())))
  }

  return (
    <>
      <section className="px-2 py-32 bg-white md:px-0">
  <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
    <div className="flex items-center sm:-mx-3">
      <div className="w-full md:w-1/2 md:px-3"> {/*border border-aliceblue-500*/}
        <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
          <h1 className="font-extrabold tracking-tight text-gray-900 sm:text-xl md:text-xl lg:text-xl xl:text-2xl">
            <span className="block xl:inline">Useful Tools to</span>
            <span className="block text-indigo-600 xl:inline">Help You Build Faster.</span>
          </h1>
          <p className="mx-auto text-[10px] text-gray-500 sm:max-w-md md:max-w-3xl">It's never been easier to build beautiful websites that convey your message and tell your story.</p>

          {/*create four cards, each should have an image top, some stat figures in the middle and text beneath*/}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
            <div className="flex items-center p-4 space-x-4 bg-white border border-gray-200 rounded-lg shadow-sm">
              <div className="p-3 rounded-full bg-indigo-50 bg-opacity-50">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" className="w-8 h-8 text-indigo-500">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">Fast Performance</h4>
                <p className="text-[10px] text-gray-500">Optimized performance to help your site load fast.</p>
              </div>
            </div>
            <div className="flex items-center p-4 space-x-4 bg-white border border-gray-200 rounded-lg shadow-sm">
              <div className="p-3 rounded-full bg-indigo-50 bg-opacity-50">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" className="w-8 h-8 text-indigo-500">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">Intuitive Design</h4>
                <p className="text-[10px] text-gray-500">Aesthetic design that is easy to use and navigate.</p>
              </div>
            </div>
            <div className="flex items-center p-4 space-x-4 bg-white border border-gray-200 rounded-lg shadow-sm">
              <div className="p-3 rounded-full bg-indigo-50 bg-opacity-50">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" className="w-8 h-8 text-indigo-500">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">Customizable</h4>
                <p className="text-[10px] text-gray-500">Easily customizable to suit your brand and style.</p>
              </div>
            </div>
            <div className="flex items-center p-4 space-x-4 bg-white border border-gray-200 rounded-lg shadow-sm">
              <div className="p-3 rounded-full bg-indigo-50 bg-opacity-50">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" className="w-8 h-8 text-indigo-500">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">Feature Reach</h4>
                <p className="text-[10px] text-gray-500">A wide range of features to help you build your site.</p>
              </div>
            </div>
          </div>

        <div className="flex space-x-4 items-center">
          {/*<Search Bar*/}
          <div className="flex items-center border border-blue-500 px-5 py-2 hover:bg-blue-100">
            <input 
              type="text" 
              placeholder="search stations" 
              className="flex-grow text-[.5rem] text-blue-500 placeholder-blue-500 outline-none"
            />
  
            {/*Search icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" className="w-2 h-2 ml-2 text-blue-500">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-4.35-4.35m-1.613-4.637a6.75 6.75 0 11-13.5 0 6.75 6.75 0 0113.5 0z" />
            </svg>
          </div>

          {/*View Stations Button*/}
          <button className="px-2 py-2 bg-blue-500 text-white text-[.5rem] flex items-center space-x-2 hover:bg-blue-600">
            <span>view stations</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" className="w-3 h-3">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        </div>
      </div>
      <div className="w-full md:w-1/2">
        <div className="w-full h-auto overflow-hidden">
            {/* <img src="https://images.unsplash.com/photo-1498049860654-af1a5c566876?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"/> */}
            <img src="../city bike hero.png" alt="City bike logo" />
          </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Home

{/* <img src="../city bike hero.png" alt="City bike logo" width={250} height={200} style={{display: "block", margin: "auto"}}/>
      <h1 style={{textAlign: "center"}}>City bike</h1>
      <input type='search' placeholder='search stations' onInput={handleSearch}/>
      <ul style={{padding: 0, listStyle: "none", cursor: "pointer", overflow: "hidden"}}>
        {searchResult.map((station) => {
          return (
          <li>
            <Link to={`/stations/${station}`}>{station}</Link>
          </li>
          )
        })}
      </ul> */}


{/* <div className="relative flex flex-col sm:flex-row sm:space-x-4">
            <a href="#_" className="flex items-center w-full px-6 py-3 mb-3 text-[10px] text-white bg-indigo-600 sm:mb-0 hover:bg-indigo-700 sm:w-auto">
              Try It Free
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
            <a href="#_" className="flex items-center px-6 py-3 text-gray-500 bg-gray-100 hover:bg-gray-200 hover:text-gray-600">
              Learn More
            </a>
          </div> */}
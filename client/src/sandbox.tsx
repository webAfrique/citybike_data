function HeroSection() {
  return (
    <div className="container mx-auto">
      <nav className="flex items-center justify-between h-10">
        <p className="ml-10 font-semibold text-[#435cd8]">citybike.<span className="font-light">data</span></p>
        <button type="button" className="px-3 py-1 text-[.5rem] font-normal text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View stations</button>
      </nav>
      <section className="hero flex items-center justify-center h-screen">
        <div className="h-full w-1/2 border-r border-gray-200">
          <div className="flex w-2/3 items-center justify-between p-5 border-b border-gray-200">
              <div className="w-1/5 h-auto">
                  <img src="cities1.jpg" alt="city image" className="h-[4rem] w-full object-contain" />
                  <p className="font-medium text-xs text-center">2</p>
                  <p className="text-[.5rem] text-center text-gray-500">Cities</p>
              </div>
              <div className="w-1/5 h-auto">
                  <img src="bike_station.jpg" alt="bike station" className="h-[4rem] w-full object-contain" />
                  <p className="font-medium text-xs text-center">450</p>
                  <p className="text-[.5rem] text-center text-gray-500">Bike stations</p>
              </div>
              <div className="w-1/5 h-auto">
                  <img src="journeys.jpg" alt="bike location" className="h-[4rem] w-full object-contain" />
                  <p className="font-medium text-xs text-center">800K+</p>
                  <p className="text-[.5rem] text-center text-gray-500">Journeys</p>
              </div>
              <div className="w-1/5 h-auto">
                  <img src="insights.jpg" alt="bike location" className="h-[4rem] w-full object-contain" />
                  <p className="font-medium text-xs text-center">Infinite</p>
                  <p className="text-[.5rem] text-center text-gray-500">Queries & insights</p>
              </div>
          </div>
          <p className="text-gray-500 mt-2">A wide range of features to help you build your site.</p>

          <div className='max-w-md mx-auto mt-5'>
            <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
            <div className="grid place-items-center h-full w-12 text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

          <input
          className="peer h-full w-full outline-none text-[.7rem] text-gray-700 pr-2"
          type="text"
          id="search"
          placeholder="Search stations.." /> 
          </div>
      </div>
        </div>
        <div className="h-full w-1/2">
          <img src="city_bike_hero.png" alt="bike" className="h-full w-full object-cover" />
        </div>
        </section>
    </div>
  );
}

export default HeroSection;
function LandingPage() {
  return (
    <div className="bg-white text-gray-900 ">

    <section className="w-full h-screen">
        {/* Navbar */}
        <nav className="h-1/10 flex justify-between items-center px-12 py-6">
            <p className="text-lg font-medium text-blue-600">citybike.<span className="text-lg font-light text-blue-600">data</span></p>
            <div className="hidden md:flex space-x-6">
                <a href="#" className="text-gray-700 hover:text-blue-600">Landings</a>
                <a href="#" className="text-gray-700 hover:text-blue-600">Pages</a>
                <a href="#" className="text-gray-700 hover:text-blue-600">Account</a>
                <a href="#" className="text-gray-700 hover:text-blue-600">Documentation</a>
            </div>
            <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-md">View stations</a>
        </nav>
        {/* Hero Section */}
        <section className="w-full h-9/10 flex ">
            <div className="w-3/5 h-full p-12 flex flex-col justify-center">
                <h1 className="text-4xl font-semibold ">Tiny dataset, <span className="text-blue-600">infinite</span></h1>
                <h2 className="text-3xl font-light mt-2">queries, insights, and visualizations</h2>
                <p className="text-gray-600 mt-4 text-lg">
                    Build a beautiful, modern website with flexible Bootstrap components built from scratch.
                </p>
                <div className="flex px-4 py-3 rounded-md border shadow-xl focus:shadow-none overflow-hidden max-w-md mt-10 font-[sans-serif]">
                    <input type="email" placeholder="Search Stations..." className="w-full outline-none bg-transparent text-gray-600 text-sm" />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px" className="fill-gray-600">
                        <path
                            d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
                        </path>
                    </svg>
      </        div>
            </div>
        
            <div className="max-w-2/5 h-full">
                <img src="citybike_hero.png" alt="hero" className="h-full w-full object-cover" />
            </div>
        </section>
    </section>

    {/* Features Section */}
    <section className="px-8 py-12 text-center md:flex md:justify-around">
        <div className="max-w-sm">
            <div className="flex justify-center">
                <h1 className="text-4xl font-semibold text-blue-600">2</h1>
            </div>
            <h3 className="text-xl font-semibold mt-4">2 Cities</h3>
            <p className="text-gray-600 mt-2">Landkit is built to make your life easier. Variables, build tooling, documentation...</p>
        </div>
        <div className="max-w-sm mt-8 md:mt-0">
        <div className="flex justify-center">
                <h1 className="text-4xl font-semibold text-blue-600">450</h1>
            </div>
            <h3 className="text-xl font-semibold mt-4">450 Stations</h3>
            <p className="text-gray-600 mt-2">Designed with the latest design trends in mind. Landkit feels modern, minimal...</p>
        </div>
        <div className="max-w-sm mt-8 md:mt-0">
        <div className="flex justify-center">
                <h1 className="text-4xl font-semibold text-blue-600">800k+</h1>
            </div>
            <h3 className="text-xl font-semibold mt-4">800k+ Journeys</h3>
            <p className="text-gray-600 mt-2">We've written extensive documentation for components and tools, so you never...</p>
        </div>
    </section>

</div>
  );
}

export default LandingPage;

//text-center px-6 md:px-12 lg:px-32 py-16
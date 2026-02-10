import React from "react";

function Homepage() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 md:px-20 py-6">
        <div className="text-lg font-semibold">
          <span className="text-blue-600">citybike.</span>
          <span className="text-blue-600 font-bold">data</span>
        </div>
        <div className="hidden md:flex space-x-8 text-gray-700 text-base font-medium">
          <a href="#" className="hover:text-blue-600">Home</a>
          <a href="#" className="hover:text-blue-600">About us</a>
          <a href="#" className="hover:text-blue-600">Work</a>
          <a href="#" className="hover:text-blue-600">Info</a>
        </div>
        <a href="#" className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-blue-700 transition">See all stations</a>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between flex-1 px-10 md:px-20 py-10 md:py-0">
        {/* Left Side */}
        <div className="flex-1 flex flex-col justify-center items-start max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-2">Data Science</h1>
          <p className="text-gray-600 text-base md:text-lg mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget libero feugiat, faucibus libero id, scelerisque quam
          </p>
          {/* Search Bar with Icons */}
          <div className="w-full max-w-xl flex items-center bg-white rounded-full px-4 py-2 mt-5 border border-gray-700 focus-within:border-blue-600 transition-all shadow-xl focus-within:shadow-none">
            <span className="material-icons text-gray-500 mr-1">search</span>
            <span className="mx-1 text-gray-300">|</span>
            <span className="material-icons text-gray-500 mr-3">chat_bubble_outline</span>
            <input
              type="text"
              placeholder="search for stations or chat with dataset"
              className="flex-1 bg-transparent outline-none border-none text-base"
            />
          </div>
        </div>
        {/* Right Side (Hero Image) */}
        <div className="flex-1 flex justify-center items-center mt-10 md:mt-0">
          <img src="/citybike_hero.png" alt="hero" className="w-full max-w-lg h-auto object-contain" />
        </div>
      </section>
    </div>
  );
}

export default Homepage; 
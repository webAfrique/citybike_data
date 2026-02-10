//import { useState, useEffect } from 'react'
//import { useParams } from "react-router"
import StationsTable from '../components/StationsTable'

function Station() {
   /*  const params = useParams()
    const {name} = params 
    //const [ station, setStation ] = useState({})
    const [ station, setStation ] = useState('')


    useEffect(() => {
        fetch(`http://localhost:3000/stations/name/?name=${name}`)
        .then((response) => response.json())
        .then((data) => setStation(JSON.stringify(data)))
    }, []) */

    return (
        <>
             {/* Navbar */}
            <nav className="flex justify-between items-center px-10 md:px-20 py-6">
                <div className="text-lg font-semibold">
                <span className="text-blue-600">citybike.</span>
                <span className="text-blue-600 font-bold">data</span>
                </div>
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
                <a href="#" className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-blue-700 transition">Home</a>
            </nav>

            {/* Stations table */}
            <StationsTable />
        </>
    )
}

export default Station
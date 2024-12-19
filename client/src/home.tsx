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
      </ul>
    </>
  )
}

export default Home
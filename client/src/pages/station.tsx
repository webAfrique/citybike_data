import { useState, useEffect } from 'react'
import { useParams } from "react-router"

function Station() {
    const params = useParams()
    const {name} = params 
    //const [ station, setStation ] = useState({})
    const [ station, setStation ] = useState('')

    useEffect(() => {
        fetch(`http://localhost:3000/stations/name/?name=${name}`)
        .then((response) => response.json())
        .then((data) => setStation(JSON.stringify(data)))
    }, [])

    return (
        <p>{station}</p>
    )
}

export default Station
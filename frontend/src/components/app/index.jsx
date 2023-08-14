import { useEffect, useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "../HomePage";
import SearchPage from "../SearchPage";
import DetailsPage from "../DetailsPage"

export default function App() {
    //store api data here
    const [songs, setSongs] = useState([])
    const [detailsData, setDetailsData] = useState({})

    //define async function to query api json response
    async function getData(url) {
        const res = await fetch(url)
        const { data } = await res.json()
        //destructure json response
        setSongs([...songs, ...data])
    }

    //query api component mount
    useEffect(() => {
        getData('http://localhost:3000/api/songs')
    }, [])
    
    return (
        <>
        <nav>
            <Link to="/">Home</Link>
            <br></br>
                        
        </nav>
        
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/search" element={<SearchPage
                songs={songs}
                getData={getData}
                setDetailsData={setDetailsData}
                />}/>
            <Route path="/details" element={<DetailsPage {...detailsData}/>}/>
        </Routes>
        </>
    )
}
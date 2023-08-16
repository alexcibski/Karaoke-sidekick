import { useEffect, useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'
import HomePage from "../HomePage";
import SearchPage from "../SearchPage";
import DetailsPage from "../DetailsPage"
import EasyPage from '../EasyPage';
import PopPage from '../PopPage';
import GiftedPage from '../GiftedPage';
import PinaPage from '../PinaPage';
import HypePage from '../HypePage';

export default function App() {
    //store api data here
    const [songs, setSongs] = useState([])
    const [detailsData, setDetailsData] = useState({})

    //define async function to query api json response
    async function getData(url) {
        const res = await fetch(url)
        const { data } = await res.json()
        
        //destructure json response
        setSongs([...songs ])
    }

    //query api component mount
    useEffect(() => {
        getData('http://localhost:3000/api/songs')
    }, [])
    
    return (
        <>
                       
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/search" element={<SearchPage
                songs={songs}
                getData={getData}
                setDetailsData={setDetailsData}
                />}/>
            <Route path="/details" element={<DetailsPage {...detailsData}/>}/>
            <Route path="/easy" element={<EasyPage updateDetails={setDetailsData} />}/>
            <Route path="/pop" element={<PopPage updateDetails={setDetailsData} />}/>
            <Route path="/gifted" element={<GiftedPage updateDetails={setDetailsData} />}/>
            <Route path="/pina" element={<PinaPage updateDetails={setDetailsData} />}/>
            <Route path="/hype" element={<HypePage updateDetails={setDetailsData} />}/>
        </Routes>
        </>
    )
}
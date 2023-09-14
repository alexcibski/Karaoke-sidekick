import { getSong } from '../../../utils/backend'
import {  useEffect, useState } from "react";
import Card from '../Card';
import {Link} from 'react-router-dom'
export default function SlowPage({updateDetails}) {
    const [slowSongs, setSlowSongs] = useState([])
    useEffect(() => {
        getSlow()
    }, [])
    async function getSlow() {
        const slow= await getSong('slow')
        setSlowSongs(slow)
    } 
    let slowContent = <p>songs are loading</p>
    if (slowSongs.length) {
         slowContent = slowSongs.map(song => {
            return <Card key={song._id} songData={song} updateDetails={updateDetails}/>
        })
    }
    
    return (
        <>
        <Link to="/" ><h2 style={{color: 'lavender'}}>Home</h2></Link>
        {slowContent}
        </>
    )
}
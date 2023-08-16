import { getSong } from '../../../utils/backend'
import {  useEffect, useState } from "react";
import Card from '../Card';
import {Link} from 'react-router-dom'
export default function HypePage({updateDetails}) {
    const [hypeSongs, setHypeSongs] = useState([])
    useEffect(() => {
        getHype()
    }, [])
    async function getHype() {
        const hype= await getSong('hype')
        setHypeSongs(hype)
    } 
    let hypeContent = <p>songs are loading</p>
    if (hypeSongs.length) {
         hypeContent = hypeSongs.map(song => {
            return <Card key={song._id} songData={song} updateDetails={updateDetails}/>
        })
    }
    
    return (
        <>
        <Link to="/">Home</Link>
        {hypeContent}
        </>
    )
}
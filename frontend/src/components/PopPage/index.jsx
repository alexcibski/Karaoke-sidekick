import { getSong } from '../../../utils/backend'
import {  useEffect, useState } from "react";
import Card from '../Card';
import {Link} from 'react-router-dom'
export default function PopPage({updateDetails}) {
    const [popSongs, setPopSongs] = useState([])
    useEffect(() => {
        getPop()
    }, [])
    async function getPop() {
        const pop= await getSong('pop')
        setPopSongs(pop)
    } 
    let popContent = <p>songs are loading</p>
    if (popSongs.length) {
         popContent = popSongs.map(song => {
            return <Card key={song._id} songData={song} updateDetails={updateDetails}/>
        })
    }
    
    return (
        <>
        <Link to="/">Home</Link>
        {popContent}
        </>
    )
}
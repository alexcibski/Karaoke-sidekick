import { getSong } from '../../../utils/backend'
import {  useEffect, useState } from "react";
import Card from '../Card';
import {Link} from 'react-router-dom'
export default function EasyPage({updateDetails}) {
    const [easySongs, setEasySongs] = useState([])
    useEffect(() => {
        getEasy()
    }, [])
    async function getEasy() {
        const easy= await getSong('easy')
        setEasySongs(easy)
    } 
    let easyContent = <p>songs are loading</p>
    if (easySongs.length) {
         easyContent = easySongs.map(song => {
            return <Card key={song._id} songData={song} updateDetails={updateDetails}/>
        })
    }
    
    return (
        <>
        <Link to="/" ><h2 style={{color: 'lavender'}}>Home</h2></Link>
        {easyContent}
        </>
    )
}
import { getSong } from '../../../utils/backend'
import {  useEffect, useState } from "react";
import Card from '../Card';
import {Link} from 'react-router-dom'
export default function PinaPage({updateDetails}) {
    const [pinaSongs, setPinaSongs] = useState([])
    useEffect(() => {
        getPina()
    }, [])
    async function getPina() {
        const pina= await getSong('pina')
        setPinaSongs(pina)
    } 
    let pinaContent = <p>songs are loading</p>
    if (pinaSongs.length) {
         pinaContent = pinaSongs.map(song => {
            return <Card key={song._id} songData={song} updateDetails={updateDetails}/>
        })
    }
    
    return (
        <>
        <Link to="/" ><h2 style={{color: 'lavender'}}>Home</h2></Link>
        {pinaContent}
        </>
    )
}
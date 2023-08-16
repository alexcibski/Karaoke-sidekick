import { getSong } from '../../../utils/backend'
import {  useEffect, useState } from "react";
import Card from '../Card';
import {Link} from 'react-router-dom'
export default function GiftedPage({updateDetails}) {
    const [giftedSongs, setGiftedSongs] = useState([])
    useEffect(() => {
        getGifted()
    }, [])
    async function getGifted() {
        const gifted= await getSong('gifted')
        setGiftedSongs(gifted)
    } 
    let giftedContent = <p>songs are loading</p>
    if (giftedSongs.length) {
         giftedContent = giftedSongs.map(song => {
            return <Card key={song._id} songData={song} updateDetails={updateDetails}/>
        })
    }
    
    return (
        <>
        <Link to="/">Home</Link>
        {giftedContent}
        </>
    )
}
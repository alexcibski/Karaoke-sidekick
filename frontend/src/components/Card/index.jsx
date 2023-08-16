import { Link } from 'react-router-dom'
export default function Card({ songData, updateDetails}) {
    
    return (
        <Link 
            to={"/details"}
            onClick={() => { updateDetails(songData)}}
            >
        <div><h2>Your Song</h2>
            <h2>{songData.song}</h2>
            <h3>{songData.artist}</h3>
            <h3>{songData.genre}</h3>
        </div>
        </Link>
    )
}
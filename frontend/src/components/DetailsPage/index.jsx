import { useEffect } from 'react'
import CommentSection from '../CommentSection'
import {Link} from 'react-router-dom'

export default function DetailsPage(props) {
    //render details data saved in localstorage if no data in app state
    useEffect(() => {
        if (props.id) {
            localStorage.setItem('detailsData', props)
            console.log(localStorage)
        }
    })

    return (
        <>
        <Link to="/">Home</Link>
        <div>
        <div>
            <h2>{props.song}</h2>
            <h3>{props.artist}</h3>
            <h3>{props.genre}</h3>

        </div>
        <CommentSection songId={props.id}/>
        </div>
        </>
    )
}
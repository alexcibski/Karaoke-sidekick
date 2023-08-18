// import { useEffect } from 'react'
// import CommentSection from '../CommentSection'
// import {Link} from 'react-router-dom'

// export default function DetailsPage(props) {
//     //render details data saved in localstorage if no data in app state
//     useEffect(() => {
//         if (props.id) {
//             localStorage.setItem('detailsData', props)
//             console.log(localStorage)
//         }
//     })
// console.log(props)
//     return (
//         <>
//         <Link to="/">Home</Link>
//         <div>
//         <div>
//             <h2>{props.song}</h2>
//             <h3>{props.artist}</h3>
//             <h3>{props.genre}</h3>

//         </div>
//         <CommentSection songId={props._id}/>
//         </div>
//         </>
//     )
// }

import { useEffect } from 'react';
import CommentSection from '../CommentSection';
import { Link } from 'react-router-dom';
import { Container, Header, Segment } from 'semantic-ui-react';

export default function DetailsPage(props) {
    // Render details data saved in local storage if no data in app state
    useEffect(() => {
        if (props.id) {
            // localStorage.setItem('detailsData', JSON.stringify(props));
            localStorage.setItem('detailsData', props)
            console.log(localStorage)
        } else {
            const storedData = JSON.parse(localStorage.getItem('detailsData'))
            props.updateDetails(storedData)    
        
        }
    });

    return (
        <Container>
            <Link to="/">Home</Link>
            <Segment>
                <div>
                    <Header as="h2">{props.song}</Header>
                    <Header as="h3">{props.artist}</Header>
                    <Header as="h3">{props.genre}</Header>
                </div>
                <CommentSection songId={props.id} />
            </Segment>
        </Container>
    );
}
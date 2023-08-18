import { useEffect } from 'react';
import CommentSection from '../CommentSection';
import { Link } from 'react-router-dom';
import { Container, Header, Segment, Grid } from 'semantic-ui-react';

export default function DetailsPage(props) {
    // Render details data saved in local storage if no data in app state
    useEffect(() => {
        if (props.id) {
            localStorage.setItem('detailsData', JSON.stringify(props));

 } });

    return (
        <Grid centered style={{ minHeight: '100vh' }}>
            <Grid.Column mobile={16} tablet={10} computer={8}>
                <Container>
                <Link to="/" ><h2 style={{color: 'lavender'}}>Home</h2></Link>
                    <Segment style={{background: 'lavender'}}>
                        <div>
                            <Header as="h2" style={{color:'purple'}}>Song: {props.song}</Header>
                            <Header as="h3" style={{color:'purple'}}>Artist: {props.artist}</Header>
                            <Header as="h3" style={{color:'purple'}}>Genre: {props.genre}</Header>
                        </div>
                        <br/>
                        <CommentSection songId={props._id} />
                    </Segment>
                </Container>
            </Grid.Column>
        </Grid>
    );
}
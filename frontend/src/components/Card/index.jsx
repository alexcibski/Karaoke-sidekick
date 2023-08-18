import { Link } from 'react-router-dom';
import { Card as SemanticUICard, Container, Grid } from 'semantic-ui-react';

export default function Card({ songData, updateDetails }) {
    return (
        <Container >
            <Grid centered>
                <Grid.Column mobile={16} tablet={8} computer={6}>
                    <Link to="/details" onClick={() => { updateDetails(songData) }}>
                        <SemanticUICard fluid style={{background: 'lavender'}}>
                            <SemanticUICard.Content>
                                
                                <SemanticUICard.Header as="h2" style={{color:'purple'}}>{songData.song}</SemanticUICard.Header>
                                <SemanticUICard.Meta style={{color:'purple'}}>{songData.artist}</SemanticUICard.Meta>
                                <SemanticUICard.Description style={{color:'purple'}}>{songData.genre}</SemanticUICard.Description>
                            </SemanticUICard.Content>
                        </SemanticUICard>
                    </Link>
                </Grid.Column>
            </Grid>
        </Container>
    );
}
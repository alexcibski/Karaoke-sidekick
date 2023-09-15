import { Link } from 'react-router-dom';
import React from 'react';
import { Container, Segment, Header, Grid } from 'semantic-ui-react';

export default function HomePage() {
    return (
        <Container centered="true">
            <Grid centered>
                <Grid.Column mobile={16} tablet={10} computer={8}>
                    <Segment style={{ background: 'lavender', color: 'white' }}>
                        <Header as="h1">Home</Header>
                        <p style={{color: 'purple'}}>Welcome to Karaoke Sidekick!! Click a link below to get started!!</p>
                        <Link to="/pop">
                            <Segment as="div" textAlign='center'>Sing a pop classic</Segment>
                        </Link>
                        <br />
                        <Link to="/easy">
                            <Segment as="div" textAlign='center'>Sing something easy</Segment>
                        </Link>
                        <br />
                        <Link to="/gifted">
                            <Segment as="div" textAlign='center'>For the gifted singer</Segment>
                        </Link>
                        <br />
                        <Link to="/pina">
                            <Segment as="div" textAlign='center'>If you like Pina Coladas...</Segment>
                        </Link>
                        <br />
                        <Link to="/hype">
                            <Segment as="div" textAlign='center'>Get everyone hyped up!!!</Segment>
                        </Link>
                        <Link to="/slow">
                        <Segment as="div" textAlign='center'>Slow things wayy down</Segment>
                        </Link>
                    </Segment>
                </Grid.Column>
            </Grid>
        </Container>
    );
}
import { Link } from 'react-router-dom';
import React from 'react';
import { Container, Segment, Header, Grid, Icon } from 'semantic-ui-react';


export default function HomePage() {
    return (
        <Container className="home-container">
            <Grid centered>
                <Grid.Column mobile={16} tablet={10} computer={8}>
                    <Segment className="home-segment">
                        <Header as="h1" className="home-header">
                            Welcome to Karaoke Sidekick!
                        </Header>
                        <p className="home-description">
                            Click a link below to get started!!
                        </p>
                        <Link to="/pop">
                            <Segment className="home-link-segment" textAlign='center'>
                                <Icon name="music" size="big" />
                                Sing a pop classic
                            </Segment>
                        </Link>
                        <Link to="/easy">
                            <Segment className="home-link-segment" textAlign='center'>
                                <Icon name="star" size="big" />
                                Sing something easy
                            </Segment>
                        </Link>
                        <Link to="/gifted">
                            <Segment className="home-link-segment" textAlign='center'>
                                <Icon name="microphone" size="big" />
                                For the gifted singer
                            </Segment>
                        </Link>
                        <Link to="/pina">
                            <Segment className="home-link-segment" textAlign='center'>
                                <Icon name="cocktail" size="big" />
                                If you like Pina Coladas...
                            </Segment>
                        </Link>
                        <Link to="/hype">
                            <Segment className="home-link-segment" textAlign='center'>
                                <Icon name="group" size="big" />
                                Get everyone hyped up!!!
                            </Segment>
                        </Link>
                        <Link to="/slow">
                            <Segment className="home-link-segment" textAlign='center'>
                                <Icon name="moon" size="big" />
                                Slow things way down
                            </Segment>
                        </Link>
                    </Segment>
                </Grid.Column>
            </Grid>
        </Container>
    );
}







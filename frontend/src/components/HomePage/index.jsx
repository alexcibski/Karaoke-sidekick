import { Link } from 'react-router-dom';
import React from 'react';
import { Container, Segment, Header } from 'semantic-ui-react';

export default function HomePage() {
    return (
        <Container text>
            <Segment>
                <Header as="h1">Home</Header>
                <p>Welcome to Karaoke Sidekick!! Click a link below to get started!!</p>
                <Link to="/pop">
                    <Segment as="div">Sing a pop classic</Segment>
                </Link>
                <br />
                <Link to="/easy">
                    <Segment as="div">Sing something easy</Segment>
                </Link>
                <br />
                <Link to="/gifted">
                    <Segment as="div">For the gifted singer</Segment>
                </Link>
                <br />
                <Link to="/pina">
                    <Segment as="div">If you like Pina Coladas...</Segment>
                </Link>
                <br />
                <Link to="/hype">
                    <Segment as="div">Get everyone hyped up!!!</Segment>
                </Link>
            </Segment>
        </Container>
    );
}
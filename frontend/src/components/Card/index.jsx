import { Link } from 'react-router-dom';
import { Card as SemanticUICard } from 'semantic-ui-react';

export default function Card({ songData, updateDetails }) {
    return (
        <Link to="/details" onClick={() => { updateDetails(songData) }}>
            <SemanticUICard>
                <SemanticUICard.Content>
                    <SemanticUICard.Header>Your Song</SemanticUICard.Header>
                    <SemanticUICard.Header as="h2">{songData.song}</SemanticUICard.Header>
                    <SemanticUICard.Meta>{songData.artist}</SemanticUICard.Meta>
                    <SemanticUICard.Description>{songData.genre}</SemanticUICard.Description>
                </SemanticUICard.Content>
            </SemanticUICard>
        </Link>
    );
}
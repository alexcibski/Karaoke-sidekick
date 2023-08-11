import { Link } from 'react-router-dom'
export default function HomePage() {
    return (
        <>
        <h1>Home</h1>
        <p>Welcome to Karaoke Sidekick!! CLick the link to get started!!</p>
        <Link to="/search">CLICK HERE TO GET STARTED!!!</Link>
        </>
    )
}
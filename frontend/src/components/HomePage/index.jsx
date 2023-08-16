import { Link } from 'react-router-dom'
export default function HomePage() {
    return (
        <>
        <h1>Home</h1>
        <p>Welcome to Karaoke Sidekick!! CLick a link below to get started!!</p>
        <Link to="/pop">
        <div>Sing a pop classic</div>
        </Link>
        <br />
        <Link to="/easy">
        <div>Sing something easy</div>
        </Link>
        <br />
        <Link to="/gifted">
        <div>For the gifted singer</div>
        </Link>
        <br />
        <Link to="/pina">
        <div>If you like Pina Coladas...</div>
        </Link>
        <br />
        <Link to="/hype">
        <div>Get everyone hyped up!!!</div>
        </Link>
        
        </>
    )
}
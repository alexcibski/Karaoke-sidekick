import { Routes, Route, Link } from "react-router-dom";
import HomePage from "../HomePage";
import SearchPage from "../SearchPage";
export default function App() {
    return (
        <>
        <nav>
            <Link to="/">Home</Link>
            <br></br>
                        
        </nav>
        
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/search" element={<SearchPage/>}/>
        </Routes>
        </>
    )
}
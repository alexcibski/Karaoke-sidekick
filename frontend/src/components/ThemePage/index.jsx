import { getSong } from '../../../utils/backend'
import {  useEffect, useState } from "react";
import Card from '../Card';
import {Link} from 'react-router-dom'
export default function ThemePage({updateDetails}) {
    const [themeSongs, setThemeSongs] = useState([])
    useEffect(() => {
        getTheme()
    }, [])
    async function getTheme() {
        const theme= await getSong('theme')
        setThemeSongs(theme)
    } 
    let themeContent = <p>songs are loading</p>
    if (themeSongs.length) {
         themeContent = themeSongs.map(song => {
            return <Card key={song._id} songData={song} updateDetails={updateDetails}/>
        })
    }
    
    return (
        <>
        <Link to="/" ><h2 style={{color: 'lavender'}}>Home</h2></Link>
        {themeContent}
        </>
    )
}
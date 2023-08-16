import { useState, useEffect } from "react";
import { getSong } from '../../../utils/backend'
import Card from "../Card";
export default function SearchPage() {
    const [answerQ1, setAnswerQ1] = useState()
    const [answerQ2, setAnswerQ2] = useState()
    const [answerQ3, setAnswerQ3] = useState()
    const [response1, setResponse1] = useState()
    const [response2, setResponse2] = useState()
    const [response3, setResponse3] = useState()

    useEffect(() => {
        // console.log(answer)
    }, [])
        console.log(answerQ1)
        console.log(answerQ2)
        console.log(answerQ3)
    const validate = function(eve) {
       
    }
    const handleChange = function(event) {
        if (event.target.id.includes("yes Q1")) {
    const sort = event.target.id.split(" ")[2]
            console.log(sort)
            setAnswerQ1(sort)
            
           } 
           if (event.target.id.includes("yes Q2")) {
            const sort = event.target.id.split(" ")[2]
            console.log(sort)
            setAnswerQ2(sort)
            
           }
           if (event.target.id.includes("yes Q3")) {
            const sort = event.target.id.split(" ")[2]
            console.log(sort)
            setAnswerQ3(sort)
            
           }
    }
    const handleSubmit = function(event) {
            event.preventDefault()
            getSong(answerQ1) .then(res => {                
                setResponse1(res)
            })
            getSong(answerQ2) .then(res => {                
                setResponse2(res)
            })
            getSong(answerQ3) .then(res => {                
                setResponse3(res)
            })
            console.log("submit")
    }
    console.log(response1)
    return (
        <>
        <h1>Search</h1>

        <h2>Do you want to sing a pop classic?</h2>
        <form id="q1" >
            <input type="radio" onChange={handleChange} id="yes Q1 pop" name="choice" value="Yes" />
            <label for="yes">YES</label>
            <input type="radio" onChange={handleChange} id="no Q1" name="choice" value="No" />
            <label for="no">NO</label>
            <br></br>
            <input type="submit" id="submit" onClick = {handleSubmit}/>
            </form>
            <br></br>
            {!response1 && <p>no data</p>}
            {response1 && response1.map((ele, idx) => (
                <Card songData={ele}/>
            ))}
        <h2>Would you like an easier song to sing?</h2>

        <form id="q2" >
            <input type="radio" onChange={handleChange} id="yes Q2 easy" name="choice" value="Yes" />
            <label for="yes">YES</label>
            <input type="radio" onChange={handleChange}id="no Q2" name="choice" value="No" />
            <label for="no">NO</label>
            <br></br>
            <input type="submit" id="submit" onClick = {validate}/>
            </form>
            <br></br>
            {!response2 && <p>no data</p>}
            {response2 && response2.map((ele, idx) => (
                <Card songData={ele}/>
            ))}
        <h2>Are you a gifted singer?</h2>
        <form id="q3">
            <input type="radio" onChange={handleChange} id="yes Q3 gifted" name="choice" value="Yes" />
            <label for="yes">YES</label>
            <input type="radio" id="no" name="choice" value="No" />
            <label for="no">NO</label>
            <br></br>
            <input type="submit" id="submit" onClick = {validate}/>
            </form>
            <br></br>
            {!response3 && <p>no data</p>}
            {response3 && response3.map((ele, idx) => (
                <Card songData={ele}/>
            ))}
    
        {/* <h2>Do you like Pina Coladas?</h2>
        <form id="q4">
            <input type="radio" id="yes" name="choice" value="Yes" />
            <label for="yes">YES</label>
            <input type="radio" id="no" name="choice" value="No" />
            <label for="no">NO</label>
            <br></br>
            <input type="submit" id="submit" onClick = "validate(choice.value, 'Yes', 'q4')"/>
            </form>
            <br></br>
        
        <h2>Do you want to get the crowd hyped?</h2>
        <form id="q5">
            <input type="radio" id="yes" name="choice" value="Yes" />
            <label for="yes">YES</label>
            <input type="radio" id="no" name="choice" value="No" />
            <label for="no">NO</label>
            <br></br>
            <input type="submit" id="submit" onClick = "validate(choice.value, 'Yes', 'q5')"/>
            </form>
            <br></br>

        <h2>Would you like to sing about drinking?</h2>
        <form id="q6">
            <input type="radio" id="yes" name="choice" value="Yes" />
            <label for="yes">YES</label>
            <input type="radio" id="no" name="choice" value="No" />
            <label for="no">NO</label>
            <br></br>
            <input type="submit" id="submit" onClick = "validate(choice.value, 'Yes', 'q6')"/>
            </form>
            <br></br> */}

        </>
    )
}
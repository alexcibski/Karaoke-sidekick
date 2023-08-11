export default function SearchPage() {
    return (
        <>
        <h1>Search</h1>

        <h2>Do you want to sing a pop classic?</h2>
        <form>
            <input type="radio" id="yes" name="choice" value="Yes" />
            <label for="yes">YES</label>
            <input type="radio" id="no" name="choice" value="No" />
            <label for="no">NO</label>
            <br></br>
            <input type="submit" id="submit"/>
            </form>
            <br></br>

        <h2>Would you like an easier song to sing?</h2>

        <form>
            <input type="radio" id="yes" name="choice" value="Yes" />
            <label for="yes">YES</label>
            <input type="radio" id="no" name="choice" value="No" />
            <label for="no">NO</label>
            <br></br>
            <input type="submit" id="submit"/>
            </form>
            <br></br>
        <h2>Are you a gifted singer?</h2>
        <form>
            <input type="radio" id="yes" name="choice" value="Yes" />
            <label for="yes">YES</label>
            <input type="radio" id="no" name="choice" value="No" />
            <label for="no">NO</label>
            <br></br>
            <input type="submit" id="submit"/>
            </form>
            <br></br>
    
        <h2>Do you like Pina Coladas?</h2>
        <form>
            <input type="radio" id="yes" name="choice" value="Yes" />
            <label for="yes">YES</label>
            <input type="radio" id="no" name="choice" value="No" />
            <label for="no">NO</label>
            <br></br>
            <input type="submit" id="submit"/>
            </form>
            <br></br>
        
        <h2>Do you want to get the crowd hyped?</h2>
        <form>
            <input type="radio" id="yes" name="choice" value="Yes" />
            <label for="yes">YES</label>
            <input type="radio" id="no" name="choice" value="No" />
            <label for="no">NO</label>
            <br></br>
            <input type="submit" id="submit"/>
            </form>
            <br></br>

        <h2>Would you like to sing about drinking?</h2>
        <form>
            <input type="radio" id="yes" name="choice" value="Yes" />
            <label for="yes">YES</label>
            <input type="radio" id="no" name="choice" value="No" />
            <label for="no">NO</label>
            <br></br>
            <input type="submit" id="submit"/>
            </form>
            <br></br>

        </>
    )
}
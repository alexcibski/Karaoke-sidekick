import { useState } from "react"
import { updateComment, deleteComment } from "../../../utils/backend"

export default function Comment({ data, refreshComments}) {
    const [showEditForm, setShowEditForm] = useState(false)
    const [editFormData, setEditFormData] = useState({
        success: data.success,
        improvements: data.improvements,
        doAgain: data.doAgain
    })
    
//update the form as user types
function handleInputCHange(event) {
    setEditFormData({
        ...editFormData,
        [event.target.name]: event.target.value
    })
}

//execute form submission logic
function handleSubmit(event) {
    //prevent page from reloading
    event.preventDefualt()
    //close the form
    setShowEditForm(false)
    //update comment in backend
    updateComment(editFormData, data._id)
        .then(() => refreshComments())
}

//delete comment
function handleDelete() {
    deleteComment(data._id)
        .then(() => refreshComments)
}
console.log(data)
//default jsx of comment
let commentElement = <div>
    <p>{data.success}</p>
    <p>{data.improvements}</p>
    <p>{data.doAgain}</p>
    <div>
        <button onClick={() => {setShowEditForm(true)}}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
    </div>
</div>

//change comment to form if showeditform stat var is true
    if (showEditForm) {
        commentElement = <form>
            <input 
                name="success" 
                placeholder="was successful" 
                value={editFormData.success}
                onChange={handleInputCHange}
            />
            <br />
            <textarea 
                name="improvements"
                placeholder="how could you improve?"
                value={editFormData.improvements}
                onChange={handleInputCHange}/>
            <br />
            <input 
                name="doAgain"
                placeholder="yes"
                value={editFormData.doAgain}
                onChange={handleInputCHange}
            />
            <div>
                <button onClick={() => {setShowEditForm(false)}}>
                    Close
                </button>
                <button type="submit">Post</button>
            </div>
        </form>
    }
    return commentElement
}
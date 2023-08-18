import { useState, useEffect } from "react"
import { postComment, getComments } from "../../../utils/backend"
import Comment from "../Comment"

export default function CommentSection({songId}) {
    //save comments queried from database in state
    const [comments, setComments] = useState([])
    const [showCreateForm, setShowCreateForm] = useState(false)
    const [createFormData, setCreateFormData] = useState({
        success: '',
        improvements: '',
        doAgain: ''
    })
    useEffect(() => {
        getComments(songId)
            .then(comments => setComments(comments))
    }, [])
    
    //update form fields as user types
    function handleInputChange(event) {
        setCreateFormData({
           ...createFormData,
           [event.target.name]: event.target.value 
        })
    }

    //render a form allows user to create a comment on submit
    function toggleCreateForm() {
        setShowCreateForm(!showCreateForm)
    }

    //update comments in comment section after a database transaction
    function refreshComments() {
        getComments(songId)
            .then(newCommentData => setComments(newCommentData))
    }

    //execute form submit logic
    function handleSubmit(event) {
        //prevent page reloading
        event.preventDefault()
        //clear the form
        setCreateFormData({
            success: '',
            improvements: '',
            doAgain: ''
        })
        //close form
        setShowCreateForm(false)
        //create comment in backend
        postComment({...createFormData, songId: songId})
            .then(() => refreshComments())
    }

    //conditionally render comments
    
    let commentElements = [<p key='0'>No comments yet</p>]
    if (comments.length > 0) {
        commentElements = comments.map(comment => {
            return <Comment 
            key={comment._id}
            data={comment}
            refreshComments={refreshComments}
            />
        })
    }
    //conditionally display text of create form button
    let btnText = 'Create'
    if (showCreateForm) {
        btnText = 'Close'
    }

    return (
        <div>
            <h2>Singer thoughts</h2>
            <button onClick={toggleCreateForm}>
                {btnText}
                </button>
                {
                    showCreateForm && <form
                        onSubmit={handleSubmit}>
                        <input 
                        name="success"
                        placeholder="was successful"
                        value={createFormData.success}
                        onChange={handleInputChange}
                        />
                        <br />
                        <textarea 
                        name="improvements"
                        placeholder="how could you improve?"
                        value={createFormData.improvements}
                        onChange={handleInputChange}/>
                        <br />
                        <input 
                        name="doAgain"
                        placeholder="yes"
                        value={createFormData.doAgain}
                        onChange={handleInputChange}
                        />
                        <button type="submit">Post</button>
                    </form>
                }
                {commentElements}
        </div>
    )
}
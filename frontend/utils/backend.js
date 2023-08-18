import axios from 'axios'

export async function getComments(songId) {
    const { data } = await axios.get(`/api/comments/${songId}`)
    console.log(data)
    return data
    
}

export async function postComment(comment) {
    const { data } = await axios.post('/api/comments', comment)
    return data
}
export async function updateComment(comment, id) {
    const { data } = await axios.put(`/api/comments/${id}`, comment)
    return data
}

export async function deleteComment(id) {
    const { data } = await axios.delete(`/api/comments/${id}`)
    return data
}

export async function getSong(sort) {
    const data = await axios.get(`/api/songs/sort/${sort}`)
    
    //console.log(data.data)
    return data.data
}

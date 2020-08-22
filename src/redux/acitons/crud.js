import {
    ADD, EDIT, DELETE, ERROR, FETCH, LIKE, DISLIKE,
    POST
} from './index';
import axios from 'axios';


export const fetch = () => async dispatch => {



    try {
        let posts = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=20")

        dispatch({ type: FETCH, payload: posts.data })
    }
    catch{
        dispatch({ type: ERROR, payload: "error in fetching" })
    }
}

export const add = (title, body) => async dispatch => {
    const data = {
        title,
        body,


    }
    try {
        let posts = await axios.post("https://jsonplaceholder.typicode.com/posts", data)

        dispatch({ type: ADD, payload: posts.data })
    }
    catch{
        dispatch({ type: ERROR, payload: "error adding file" });


    }



}

export const edit = (body, title, id) => async dispatch => {
    const editedData = {
        title,
        body,
        id

    }

    try {
        // const result = await axios.put("https://jsonplaceholder.typicode.com/posts/" + id, editedData)
        // console.log(result.data)
        dispatch({ type: EDIT, payload: editedData });

    }
    catch{
        dispatch({ type: ERROR, payload: "error in editing post" })
    }
}

export const del = (id) => async dispatch => {


    try {
        await axios.delete("https://jsonplaceholder.typicode.com/posts/" + id)

        dispatch({ type: DELETE, payload: id });

    }
    catch{
        dispatch({ type: ERROR, payload: "error in deleting post" })
    }
}
export const post = (id) => async dispatch => {
    console.log(id)
    try {
        const postDetail = await axios.get("https://jsonplaceholder.typicode.com/posts/" + id)
        console.log(postDetail.data)
        dispatch({ type: POST, payload: postDetail.data });
    }
    catch{
        dispatch({ type: ERROR, payload: "error in fetching post" })
    }
}



export const like = (id, title, body) => async dispatch => {
    const value = {
        id,
        title,
        body,
        count: 1
    }
    dispatch({ type: LIKE, payload: value })

}

export const dislike = (id, title, body) => async dispatch => {
    const value = {
        id,
        title,
        body,

    }

    dispatch({ type: DISLIKE, payload: value })

}
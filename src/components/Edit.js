import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { edit, post } from '.././redux/acitons/crud';


const Edit = (props) => {
    const [data, setData] = useState([])


    const id = props.match.params.id;
    console.log(props.posts.find(post => post.id == id));
    useEffect(() => {
        const d = props.posts.find(post => post.id == id)
        setData(d)
        // axios.get("https://jsonplaceholder.typicode.com/posts/" + id)
        //     .then(res => {
        //         setData(res.data)
        //     })

    }, [id])
    const { body, title } = data;
    const change = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const submit = (e) => {
        e.preventDefault();

        props.edit(body, title, id)

    }

    return (
        <div className="container">

            <h1 style={{ textAlign: "center" }}>This is Edit Page</h1>
            <hr />


            <div style={{ width: "50%", margin: "auto" }} key={data.id} >
                <div>
                    <h2>title</h2>
                    <textarea rows="3" cols="50" name="title" value={data.title} onChange={change} />

                </div>
                <div>

                    <h5>body</h5>
                    <textarea rows="6" cols="50" name="body" value={data.body} onChange={change} />
                </div>
                <input type="submit" onClick={submit} value="post" />

            </div>



            <div>
                <h5>Updated posts</h5>
                <div>
                    <h3>edited : {props.edited}</h3>
                </div>

            </div>

        </div>
    );
}

const mapStateToProps = (state) => ({
    posts: state.crud.fetch,
    edited: state.crud.edited,
    postData: state.crud.post,
    editedData: state.crud.edited
})

export default connect(mapStateToProps, { edit, post })(Edit);

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Post = (props) => {
    const [data, setData] = useState({
        body: '',
        title: '',

    })
    const post_id = props.match.params.id;
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts/" + post_id)
            .then(res => {
                setData({
                    body: res.data.body,
                    title: res.data.title
                })
            })
    })
    return (
        <div>
            <h2>{data.title}</h2>
            <h4>{data.body}</h4>

        </div>
    );
}

export default Post;

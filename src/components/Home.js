import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="container">

            <hr />
            <div className="d-flex justify-content-around">

                <button className="btn btn-primary" ><Link style={{ color: "white" }} to="/add">Add posts</Link></button>
                <button className="btn btn-primary" ><Link style={{ color: "white" }} to="/posts"> See Posts</Link></button>
                <button className="btn btn-primary"><Link style={{ color: "white" }} to="/liked"> Liked posts</Link></button>
                <button className="btn btn-primary"><Link style={{ color: "white" }} to="/disliked"> Disliked posts</Link></button>
            </div>



        </div>
    );
}

export default Home;

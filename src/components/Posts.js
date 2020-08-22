import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetch, like, dislike, del } from '../redux/acitons/crud';
import { connect } from 'react-redux';


const Posts = (props) => {


    const [search, setSearch] = useState('')


    useEffect(() => {
        if (!props.data) {
            props.fetch()

        }


    }, [])


    const del = (e) => {
        props.del(e.target.id);

    }
    const change = (e) => {

        setSearch(e.target.value)
    }
    const reversed = props.posts.map(post => post).reverse()

    let filterList = reversed.filter(post => post.title.indexOf(search) !== -1)





    return (
        <div className="container">
            <div className="d-flex justify-content-end">

                <h5>search for posts here :</h5>
                <input type="text" name="search" value={search} onChange={change} style={{ padding: 5, }} />
            </div>
            <br />

            <hr />
            {filterList.map(post => {
                return (
                    <React.Fragment>
                        <div>

                            <h3>Title:<br />{post.title}</h3>
                            <h4>Body:<br />{post.body}</h4>
                            <div className="d-flex justify-content-around">

                                <button className="btn btn-primary" onClick={() => props.like(post.id, post.title, post.body)} >Like</button>
                                <button className="btn btn-primary" onClick={() => props.dislike(post.id, post.title, post.body)}>Dislike</button>
                                <button className="btn btn-primary"><Link to={"/edit/" + post.id} style={{ color: 'white' }}> Edit</Link></button>
                                <button className="btn btn-danger" id={post.id} onClick={del}>Delete</button>
                            </div>
                        </div>
                        <hr />
                    </React.Fragment>
                )
            })}

        </div >
    );


}

const mapStateToProps = (state) => ({
    posts: state.crud.fetch,
    data: state.crud.data


})


export default connect(mapStateToProps, { fetch, like, dislike, del })(Posts);

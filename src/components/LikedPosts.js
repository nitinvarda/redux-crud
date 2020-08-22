import React from 'react';
import { connect } from 'react-redux';

const LikedPosts = (props) => {





    return (
        <div className="container">
            <h3>these are liked posts</h3>
            <hr />
            {props.liked.map(like => {
                return (
                    <div key={like.id}>
                        <h3>title:{like.title}</h3>
                        <h5>body:{like.body}</h5>

                    </div>
                )
            })}

        </div>
    );
}

const mapStateToProps = (state) => ({
    liked: state.crud.likes
})



export default connect(mapStateToProps)(LikedPosts);

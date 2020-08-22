import React from 'react';
import { connect } from 'react-redux';
const Disliked = (props) => {


    return (
        <div>
            {props.disliked.map(like => {
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
    disliked: state.crud.dislikes
})
export default connect(mapStateToProps)(Disliked);

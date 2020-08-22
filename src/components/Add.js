import React, { useState } from 'react';
import { connect } from 'react-redux';
import { add } from '../redux/acitons/crud';


const Add = (props) => {
    const [data, setData] = useState({
        title: '',
        body: ''
    })

    const { title, body } = data;
    const change = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const submit = (e) => {
        e.preventDefault();

        props.add(title, body)


    }


    return (
        <div className="container">

            <form onSubmit={submit}>
                <div className="d-flex justify-content-center">

                    <div className="d-flex flex-column">
                        <div>

                            <label>Title</label>
                            <textarea cols="40" rows="2" name="title" value={title} onChange={change} />
                        </div>
                        <div>

                            <label>Body</label>
                            <textarea cols="40" rows="5" name="body" value={body} onChange={change} />
                        </div>
                        <input type="submit" value="Add" />
                    </div>
                </div>
            </form>
            <div>
                <h2>Added data will show here</h2>
                <h2>Title : {props.added.title}</h2>
                <p>Id: {props.added.id}</p>
                <h3>Body:{props.added.body}</h3>
            </div>

        </div>
    );
}
const mapStateToProps = (state) => ({
    added: state.crud.add
})
export default connect(mapStateToProps, { add })(Add);

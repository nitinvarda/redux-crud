import { ADD, DELETE, EDIT, FETCH, LIKE, DISLIKE, POST } from '../../redux/acitons/index';


const initialState = {
    data: null,
    add: '',
    edited: '',
    fetch: [],
    likes: [],
    dislikes: [],
    post: []
}

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case ADD:
            state.fetch.push(payload)

            return {
                ...state,
                add: payload

            }
        case EDIT:

            state.fetch[payload.id - 1].title = payload.title
            state.fetch[payload.id - 1].body = payload.body;


            return {
                ...state,
                edited: "success , check in posts "

            }
        case DELETE:
            // console.log(payload)
            const newpost = state.fetch.filter(post => post.id != payload)

            return {
                ...state,
                fetch: newpost

            }
        case FETCH:
            return {
                ...state,
                data: true,
                fetch: payload
            }
        case POST:
            state.post.push(payload);
            return {
                ...state,

            }
        case LIKE:
            state.likes.push(payload)
            return {
                ...state
            }
        case DISLIKE:
            state.dislikes.push(payload)
            return {
                ...state,
            }

        default:
            return state

    }

}
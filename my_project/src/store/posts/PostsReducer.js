import { ADD_NEWPOST, FETCH_POSTS } from "./type"
import Post from "../../components/Posts/Post"



const initState = { 
    posts: [],
    fetchedPosts: [],    
}

// const post = {
//     key,
//     img,
//     cardText: '',
//     like: 0,
//     comment: '',
// }

const PostsReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_NEWPOST: 
         return {...state, posts: state.posts.concat([action.payload])}
        case FETCH_POSTS:
         return {...state, fetchedPosts: action.payload}
        default: return state
    }
    
}

export default PostsReducer

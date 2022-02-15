import { ADD_NEWPOST, FETCH_POSTS, SHOW_LOADER, HIDE_LOADER } from "./type"

export const addNewPost = (value) => {
    return (
    {
        type: ADD_NEWPOST,
        payload: value 
    }
    )
}

export function showLoader () {
    return {
        type: SHOW_LOADER
    }
}


export function hideLoader () {
    return {
        type: HIDE_LOADER
    }
}

export const fetchPosts = () => {
    return async dispatch => {
        dispatch(showLoader())
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
        const json = await response.json()
        console.log(json)
        setTimeout(() => {
            dispatch({type: FETCH_POSTS, payload: json})
            dispatch(hideLoader())
        }, 1000)
        
    }
   
}
// это actionCreator 

// const addNewPost = (value) => ({
//         type: 'ADD_NEWPOST',
//         payload: value 
//     })
// сокращенная форма 


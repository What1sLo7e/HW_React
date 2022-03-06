import { createStore, applyMiddleware } from "redux";
import { moviesReducer } from '../store/movies/reducer'

// next это dispatch
const stringActionMiddelware = (store) => (next) => (action) => {
    if (typeof action === 'string') {
        return next({ type: action })
    }

    return next(action)
} 

const logActionMiddleware = (store) => (dispatch) => (action) => {
    console.log('>', action)
    return dispatch(action)
} 

const middlewares = applyMiddleware(stringActionMiddelware, logActionMiddleware)

const store = createStore(moviesReducer, middlewares)

store.dispatch('stringAction')
store.dispatch({type: 'someAction'})

export default store
const initState = { movies : [] }

export const moviesReducer = (state = initState, action) => {

    if (action.type === 'setMovies') {
        console.log(action)
        return { ...state, movies: action.movies }
    }
    return state
}

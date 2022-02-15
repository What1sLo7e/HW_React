import { HIDE_LOADER, SHOW_LOADER } from "./type"


const initState = {
    loading: false 
}

const appReducer = (state = initState, action) => {
    switch (action.type) {
        case SHOW_LOADER: 
            console.log('SHOW')
            return {...state, loading: true}
        case HIDE_LOADER:
            console.log('HIDE', {...state})
            return {...state, loading: false }
        default: return state
    }
}

export default appReducer
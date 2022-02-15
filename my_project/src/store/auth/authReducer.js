import { ISAUTH_FALSE, ISAUTH_TRUE, ISADMIN_TRUE, ISADMIN_FALSE } from "./type"

const initState = { 
    AdminId: '61fa8e3ead55d22f3e2faff6',
    isAdmin: false, 
    isAuth: false,
    }

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case ISAUTH_TRUE: 
        console.log('ISAUTH_TRUE')
        return {...state, isAuth: true}

        case ISAUTH_FALSE: 
        console.log('ISAUTH_FALSE')
        return {...state, isAuth: false}
        
        case ISADMIN_TRUE: 
        console.log("isAdmin case true")
        return {...state, isAdmin: true}
        
        case ISADMIN_FALSE: 
        console.log("isAdmin case false")
        return {...state, isAdmin: false}
        
        default: return state
    }
}

export default authReducer
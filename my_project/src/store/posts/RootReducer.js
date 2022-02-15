import { combineReducers } from "redux";
import PostsReducer from "./PostsReducer";
import appReducer from "./AppReducer";
import authReducer from "../auth/authReducer";

const rootReducer = combineReducers( {
    posts: PostsReducer,
    app: appReducer,
    auth: authReducer,
})

export default rootReducer
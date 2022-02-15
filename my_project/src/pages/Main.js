import React from "react";
import img from '../images/THECHEETAHS-RadioActive\'79.jpg'
import MainNavbar from "../components/MainNavbar";
import store from "../store/posts";
import {addNewPost} from "../store/posts/actions";
import { isAdminTrue } from "../store/auth/authAction";
import { Button } from "react-bootstrap";
import PostForm from "../components/Posts/PostForm";
import Post from "../components/Posts/Post";
import Posts from "../components/Posts/Posts";
import FetchedPosts from "../components/Posts/FetchedPosts";
import { gql } from "../gql/gql";
// import { token } from "./Signup";
import jwtDecode from "jwt-decode";
import { useSelector, useDispatch } from "react-redux";
import { isAuthTrue } from "../store/auth/authAction";

const Main = () => {

    const isAdmin = useSelector(state => state.auth.isAdmin)
    const isAuth = useSelector(state => state.auth.isAuth)
    console.log("isAuth in MAIN", isAuth)

    // const onClick = () => {
    //     store.dispatch(addNewPost('3'))
    //     console.log('store.getState()', store.getState())
    // }

    const createNewPost = () => {
    //     const query = `
    //     mutation newPost ($post: PostInput) {
    //         PostUpsert(post: $post) {
    //             _id owner{_id}
    //         }
    //     }
    //     `
    //     const variables = {
    //         post: {
    //             _id: userId,
    //             // title: 'First post title test',
    //         }
    //     }
    //     gql(query, variables)
    }


    // const arr = store.getState().posts
    // console.log(store.getState())
    // const arrMap = arr.map(x => <Post/>)

    return (
        <div>
            <MainNavbar/>
            <h1>Main page</h1>  
            <div className="container pt-3">
                    <div className="row">
                        <div className="col">
                        <PostForm />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                        <h2>Синхронные Посты</h2>
                        <Posts />
                        </div>
                        <div className="col">
                        <h2>Асинхронные посты</h2>
                        <FetchedPosts />
                        </div>
                    </div>
                    {isAdmin &&<Button type='button' onClick={createNewPost}>New POST</Button>}
                </div>
                {/* <PostForm/>
                <Posts />
                <FetchedPosts /> */}
            {/* <Button onClick={onClick}>New Post</Button> */}
        </div>
    )
}

export default Main
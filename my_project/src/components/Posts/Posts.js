import Post from "./Post"
import { connect } from "react-redux"

const Posts = ({syncPosts}) => {
    if (!syncPosts.length) {
        return <p className="text-center"> Постов пока нет </p>
    }
    return syncPosts.map(post => <Post post={post} key={post.id}/>)
}

const mapStatetoProps = state => {
    console.log(state)
    return {
        syncPosts: state.posts.posts
    }
}

export default connect(mapStatetoProps, null)(Posts)
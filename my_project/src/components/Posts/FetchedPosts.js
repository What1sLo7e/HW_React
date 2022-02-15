import { useDispatch, useSelector } from "react-redux"
import { fetchPosts } from "../../store/posts/actions"
import Post from "./Post"
import Loader from "../Loader"

const FetchedPosts = () => {
    const dispatch = useDispatch()
    const posts = useSelector((state) => {
        return state.posts.fetchedPosts
    })
    const loading = useSelector(state => state.app.loading)
    
    if (loading) {
        // console.log('loading TRUE')
      <Loader/>
    }

    //  не работает спинер, не пойму почему ? 

    if (!posts.length) {
        return <button 
        className="btn btn-primary"
        onClick={() => dispatch(fetchPosts())}
        > Загрузить </button>
    }
    return (posts.map(post => <Post post={post} key={post.id}/>))

}

export default FetchedPosts

import {React , useEffect} from 'react';
import { useParams, Link } from "react-router-dom";  
import { useSelector, useDispatch} from 'react-redux'; 
import { normalizeMovies } from '../Movies';

const DetalisMovies = () => {
    const params = useParams()
    const movies = useSelector((state) => {
        return state
    })
    const movie = movies.movies.find(m => m.id === +params.id)
    // console.log('F', movie)
    const dispatch = useDispatch()

    useEffect(() => {
        if (!movies.length) {
        fetch('http://api.tvmaze.com/shows')
        .then(res => res.json())
        .then(data => dispatch({ type: 'setMovies', movies: normalizeMovies(data)}))
        }
    }, [])

    console.log('2', movie)

    return !movie ? null : ( 
        <div>
            <h1>{movie && movie.name}</h1>
            <img src={movie.image}></img>
            <h3>Rating: {movie.rating}</h3>
            <p>{movie && movie.summary}</p>
            <Link to={'/movies'}>Back</Link>
        </div>
    ) 
}

export default DetalisMovies
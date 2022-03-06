import React from 'react';
import { Link } from 'react-router-dom';

export function MoviesList ({movies = []}) {
    return(
<div>
    <table className='table table-hover'>
        <thead>
            <tr>
                <th>#</th>
                <th>Title</th>
                <th>Premier</th>
                <th>Rating</th>
            </tr>
        </thead>
        <tbody>
            {movies.map(movie => (
                <tr key={movie.id}>
                    <td>{movie.id}</td>
                    <td><Link to={`/movies/${movie.id}`}>{movie.name}</Link></td>
                    <td>{movie.premiered}</td>
                    <td>{movie.rating}</td>
                </tr>
            ))}
            
        </tbody>
    </table>
</div>)
}

export default MoviesList
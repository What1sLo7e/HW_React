import React from 'react';

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
                    <td>{movie.name}</td>
                    <td>{movie.premiered}</td>
                    <td>{movie.rating.average}</td>
                    {/* <td><img src={movie.image.medium}/></td> */}
                </tr>
            ))}
            
        </tbody>
    </table>
</div>)
}

export default MoviesList
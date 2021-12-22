import React, {useEffect, useState} from 'react';
import Controls from  './components/Controls'
import MoviesList from './components/MoviesList';
import 'bootstrap/dist/css/bootstrap.css'


const normalizeMovies = (movies) => movies.slice(0,19).map((movie) => ({
    id: movie.id,
    name: movie.name,
    premiered: movie.premiered,
    rating: movie.rating.average,
}));

const sortFn = (field) => (a,b) => {
    if(a[field] > b[field]){
        return 1
    }
    if (a[field] < b[field]) {
        return -1
    }

    return 0
}


const filterFn = (movies, sort, search) => {
    let newMovies = [...movies];

    newMovies = newMovies.filter((movie) => movie.name.toLowerCase().includes(search.toLowerCase()))

    newMovies.sort(sortFn(sort))    
   
    return newMovies;
}

const Movies = () => {
    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState('')
    const [sort, setSort] = useState('')

    
    useEffect (() => {
        fetch('http://api.tvmaze.com/shows')
        .then(res => res.json())
        .then(data => setMovies(normalizeMovies(data)))
    }, [])

    const onSearch = (e) => {
        setSearch(e.target.value)
    }

    const onSort = (e) => {
        setSort(e.target.value)
    }


    return (
        <div>
            <Controls {...{ search, sort, onSearch, onSort}}/>
            <MoviesList movies={filterFn(movies, sort, search)}/>
        </div>
    )
    
}





export default Movies
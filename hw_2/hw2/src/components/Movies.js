import React, {useEffect, useState} from 'react';
import Controls from  './Controls'
import MoviesList from './MoviesList';

import 'bootstrap/dist/css/bootstrap.css'
// import { Sort } from './Sorts';

const normalizeMovies = (movies) => movies.map((movie) => ({
    id: movie.id,
    name: movie.name,
    premiered: movie.premiered,
    rating: movie.rating.average,
}));

const filterFn = (movies, sort, search) => {
    const newMovies = [...movies];

    newMovies.sort((a,b) => {
        if(a[sort] > b[sort]){
            return 1
        }
        if (a[sort] < b[sort]) {
            return -1
        }

        return 0
    }) 
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

    // async MoviesFetch () {
    // let res = await fetch('http://api.tvmaze.com/shows')
    //         let data = await(res.json())
    //         console.log(data)

    //     let arrayMovies = data.slice(0,20)
    //     console.log(arrayMovies)
    // }
    
    

    
    return (
        <div>
            <Controls {...{ search, sort, onSearch, onSort}}/>
            <MoviesList movies={filterFn(movies, sort, search)}/>
        </div>
    )
    
}





export default Movies
import React, {Component} from 'react';
import Controls from  './Controls'
import MoviesList from './MoviesList';
import 'bootstrap/dist/css/bootstrap.css'


// const normalizeMovies = (movies) => movies.map((movie) => ({
//     id: movie.id,
//     name: movie.name,
//     premiered: movie.premiered,
//     rating: movie.rating.average,
// }));

// const filterFn = (movies, sort, search) => {
//     const newMovies = [...movies];

//     newMovies.sort((a,b) => {
//         if(a[sort] > b[sort]){
//             return 1
//         }
//         if (a[sort] < b[sort]) {
//             return -1
//         }

//         return 0
//     }) 
//     return newMovies;
// }

// const Movies = () => {
//     const [movies, setMovies] = useState([])
//     const [search, setSearch] = useState('')
//     const [sort, setSort] = useState('')

    
//     useEffect (() => {
//         fetch('http://api.tvmaze.com/shows')
//         .then(res => res.json())
//         .then(res => console.log(res))
//         .then(data => setMovies(normalizeMovies(data)))
        
//     }, [])

    const onSearch = (e) => {
        // setSearch(e.target.value)
    }

    const onSort = (e) => {
        // setSort(e.target.value)
    }

    const setSearch = () => {}
    const setSort = () => {}
    const search = 0
    const sort = () => {
        let newValue = this.state.movies.sort()
        return this.setState({movies: newValue})
    }

    
//     return (
//         <div>
//             <Controls {...{ search, sort, onSearch, onSort}}/>
//             <MoviesList movies={filterFn(movies, sort, search)}/>
//         </div>
//     )
    
// }

class MoviesClass extends Component {
    constructor(props) {
        super(props)
        this.state = {movies: []}
    }

     
    
    setMoviesState (arr) {
        const newValue = arr.slice(0,19)
      return this.setState({movies: newValue})
    }

    componentDidMount() {
        this.getMovies(); // не в конструкторе надо вызывать, а в componentDidMount
        
    }

   getMovies () { 
       fetch('http://api.tvmaze.com/shows')
        .then(res => res.json())
        .then(data => this.setMoviesState(data))
        .then(data => console.log(this.state.movies))
        
   }
//    conlosLog () {
//     console.log(this.state.movies)
//    }

    render() {
        return(
        <div>
            <Controls {...{ search, sort, onSearch, onSort}}/>
            <MoviesList movies={this.state.movies}/>
        </div>
        )
    }
}






export default MoviesClass
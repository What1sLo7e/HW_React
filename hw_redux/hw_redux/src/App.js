
import './App.css';
import Movies from './Movies';
import ImputRange from './pages/InputRange';
import {Route, Routes, Navigate} from 'react-router-dom'
import Header from './pages/Header';
import DetalisMovies from './pages/DetalisMovies';


function App() {
  return (
    <div >
      <Header/>
        <Routes>
            <Route path='/' element={<Navigate to='/input-range'/>}/>
            <Route path='/input-range' element={<ImputRange/>}/>
            <Route path='/movies' element={<Movies/>}/>
            <Route path='/movies/:id' element= {<DetalisMovies/>}/>
        </Routes>
    </div>
  );
}

export default App;


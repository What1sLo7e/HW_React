
import './App.css';
import Movies from './Movies';
// import Counter from './components/Counter'
// import Range from './components/Range';
// import Form from './components/Form';
import ImputRange from './pages/InputRange';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
import Header from './pages/Header';


function App() {
  return (
    <div >
      {/* <Range/> */}
      {/* <Form/> */}
      {/* <Counter step={3}/> */}
      <Header/>
      <h1>Home</h1>
        <Routes>
            <Route path='/' element={<Navigate to='/input-range'/>}/>
            <Route path='/input-range' element={<ImputRange/>}/>
            <Route path='/movies' element={<Movies/>}/>
           {/* <Route path='/movies'element= {<Movies/>}/> */}
        </Routes>
    </div>
  );
}

export default App;


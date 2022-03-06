import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route, Navigate, Switch} from 'react-router-dom' 
import Home from './components/Home'
import Product from './components/Product'
import Navigation from './components/Navigation';
import ProductDetalis from './components/ProductDetalis';

function App() {
  return (
    <div className="App">
      <h1>HiAPP</h1>
      <Navigation/>
      <Routes>
              <Route path='/' exact ></Route>
              <Route path='/home' element={<Home/>} />
              <Route path='/authors' element={<Product/>} />
              <Route path='/books' element={<ProductDetalis/>} exact/>
              {/* <Route ><NotFound/></Route>*/}
              <Route path='/books/:bookId'></Route> // {/*динамический параметр*/} 
      </Routes>
    </div>
  );
}

export default App;

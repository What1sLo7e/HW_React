import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import {Login} from './pages/Login'
import Signup from './pages/Signup'
import 'bootstrap/dist/css/bootstrap.min.css'
import Main from './pages/Main'
import MyProfile from './pages/MyProfile'
import { useSelector, useDispatch } from 'react-redux'
import { isAuthTrue, isAdminTrue } from './store/auth/authAction'
import jwtDecode from 'jwt-decode'



function App() {
  const dispatch = useDispatch()
  const AdminId = useSelector(state => state.auth.AdminId)
  const isAdmin = useSelector(state => state.auth.isAdmin)
  const isAuth = useSelector(state => state.auth.isAuth)

  // if ((localStorage.getItem("token") != null) && (localStorage.getItem("token").length != 24)) {
  //   dispatch(isAuthTrue())


    // const token = localStorage.getItem("token")
    // console.log('Токен в ЛС в АПП', token)

    // if (localStorage.getItem("token").length > 24) {

    // }
    
    // const userInfo = jwtDecode(token)
    // const userId = userInfo.sub.id 

    
  //   console.log('Is admin ', isAdmin)

  //   if (AdminId === userId) {
  //       dispatch(isAdminTrue())
  //   }
  //   console.log("dispatch perez")
  //   // чтобы при перезагрузке не выкидывало на 403 
  // }

  console.log('isAuth', isAuth)

  return ( 
    <div>
       <Routes>
          <Route path='/' element={<Navigate to='/login'/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/> 
          <Route path='/main' element={
          isAuth ? <Main/> : <Navigate to='/403'/>}/> 
          <Route path='/myprofile'  element={
          isAuth ? <MyProfile/> : <Navigate to='/403'/>}/>
          <Route path='/403' element={<h1>Нет доступа</h1>}/>
          <Route path='*' element={<Navigate to='/403'/>}/>
        </Routes> 
      </div>
  );
} 

export default App;

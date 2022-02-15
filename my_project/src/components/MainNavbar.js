import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isAdminFalse, isAuthFalse} from "../store/auth/authAction";




const MainNavbar = () => {
    
    const dispatch = useDispatch()
    const isAuth = useSelector(state => state.auth.isAuth)
    const navigate = useNavigate()

    const onLogOut = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("registratin_id")
        dispatch(isAuthFalse())
        dispatch(isAdminFalse())
        navigate('/login')
        console.log(localStorage.getItem("token"))
        console.log(localStorage.getItem("registratin_id"))
    }
    
    console.log("Local Storage", localStorage.getItem("token"))
    
    // if (!localStorage.getItem("token")) {
    //     navigate('/login')
    // }



    return (
    <>
        <Navbar bg="dark" variant="dark" >
            <Container>
            <Navbar.Brand >Navbar</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link onClick={()=> navigate("/main")}>Home</Nav.Link>
            <Nav.Link onClick={()=> navigate("/myprofile")}>My profile</Nav.Link>
            <Nav.Link  onClick={onLogOut}>Log out</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
    </>
        )
}

export default MainNavbar
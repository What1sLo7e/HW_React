import React from "react";
import { useSelector } from "react-redux";
import { Button, ButtonGroup, Image } from "react-bootstrap"; 
import img from '../images/THECHEETAHS-RadioActive\'79.jpg'
import MyInfo from "../components/MyInfo";
import { useNavigate } from "react-router-dom";
import MainNavbar from "../components/MainNavbar";


const MyProfile = () => {
    const navigate = useNavigate()
    const isAdmin = useSelector(state => state.auth.isAdmin)
    return (
        <div>
            <MainNavbar/>
            <Image src={img} style={{ width: '22rem' }}/>
            <MyInfo/>
            <ButtonGroup vertical>
            {isAdmin &&<Button >Change First Name</Button>}
            {isAdmin &&<Button >Change Last Name</Button>}
            {isAdmin &&<Button >Change Login</Button>}
            </ButtonGroup>
            <Button type='link' onClick={() => navigate('/main')}>Back to Main</Button>
        </div>
    )

}

export default MyProfile
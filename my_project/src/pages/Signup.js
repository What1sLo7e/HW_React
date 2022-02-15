import {React, useRef, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from 'formik'
import * as yup from 'yup'
import Input from "../components/Input";
import Button from "../components/Button";
import Message from "../components/Message";
import { isVisible } from "@testing-library/user-event/dist/utils";
import { gql } from "../gql/gql";
import jwtDecode from "jwt-decode";
import { isAuthTrue } from "../store/auth/authAction";
import { useDispatch, useSelector } from "react-redux";


// export const token = 'localStorage.getItem("token")'

// console.log("TOKEN",localStorage.getItem("token"))
// const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOiI2MWZhOGUzZWFkNTVkMjJmM2UyZmFmZjYiLCJsb2dpbiI6InRlc3RVc2VyM0BnbWFpbC5jb20iLCJhY2wiOlsiNjFmYThlM2VhZDU1ZDIyZjNlMmZhZmY2IiwidXNlciJdfSwiaWF0IjoxNjQzODc4MDI3fQ.jk9GVTVWBq2YPcDQmg7-V9GzD3OCX6WRYc1DF-KsfJc"
const Signup = (props) => {

    // const userInfo = jwtDecode(token)
    // const userId = userInfo.sub.id 
    // console.log('USER_ID>>>>', userId )

    const navigate = useNavigate()
    const inputRef = useRef(false)
    // const userId2 = JSON.stringify(userId)
    const dispatch = useDispatch()
    const isAuth = useSelector(state => state.auth.isAuth)

    const onReg = (login, password) => {
        const query = `
            mutation reg($login: String!, $password: String!) { 
                createUser (login: $login, password: $password){
                 _id
            }
          }`
    const variables = {
        login,
        password,
        }
    gql(query, variables)  
    // .then(res => console.log('RES', res))
    .then(res => localStorage.setItem("registratin_id", res.data.createUser._id))
    .then(data => console.log("registratin_id!!!!", localStorage.getItem('registratin_id')))
       
    if (localStorage.getItem("registratin_id") != null) {
        console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!Is auth before navigate',isAuth)
        dispatch(isAuthTrue())
        console.log('Is auth before navigate2',isAuth)
        navigate('/main')
    }
    }

   

    // const onLogin = () => {
    //     const query = `
    //     query login($login: String!, $password: String!) {
    //         login(login: $login, password: $password)
    //         }
    //     `
    //     const variables = {
    //     login: 'testUser3@gmail.com',
    //     password: 'test123',
    //     }

    //     gql(query, variables)
    // } 

    const onUsers = () => {
        const query = `
        query getUsers {
            UserFind(query: "[{}]") {
                login
                nick
                _id
                avatar { url }
            }
        }
        `
        const variables = {}

        gql(query, variables)
    }


    const onGetUser = () => {
        const query = `
            query getUser($q: String) {
                UserFindOne(query: $q) {
                    _id login nick avatar { url }
                }
            }
        `;
        const variables = {
            q: JSON.stringify([
                // { _id: userId }
            ])
        };
        gql(query, variables);
    }

    const onUserChangeNick = () => {
        const query = `
        mutation updateUserNick ($user: UserInput) {
            UserUpsert(user: $user) {
                _id 
            }
        }
        `
        const variables = {
            user: {
                // _id: userId,
                nick: 'Valeeeraaaaaaaaaa',
            }
        }
        gql(query, variables)
        
    }



// /    // -----------------------------------------------
    const onSubmit = (values) => {
       
        onReg(formik.values.email, formik.values.password)
        console.log('signup submit after onReg', values)
        
    }

    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword:'',
        agree: false,
    }
   

    const validationSchema = yup.object().shape({
        firstName: yup.string().required('Напишите Ваше Имя'),
        lastName: yup.string().required('Напишите Вашу Фамилию'),
        email: yup.string().required().email(),
        password: yup.string().required('Напишите пароль').min(3).max(10),
        confirmPassword: yup.string().oneOf([yup.ref('password')], 'Пароли не совпадают').required('Повторите пароль'),
        agree: yup.boolean().test('is-agree', 'Обязательно', (value) => value),
    })

    const REGEX_EMAIL = /\S+@\S+\.\S+/;


    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
        // validateOnBlur,
    })
    console.log('>', formik.getFieldProps('email'))
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus()
        }
    }, [isVisible])
    

    return (

    <div {...props}>
        <h1>SignUp Page</h1>
        <form onSubmit={formik.handleSubmit} >
                <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <Input name="firstName"
                        className="form-control"
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        ref={inputRef} 
                        />
                    {(formik.touched.firstName && formik.errors.firstName) && <Message className="form-text" text='danger'>{formik.errors.firstName}</Message>}
                </div>
                
                <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <Input name="lastName"
                        className="form-control"
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} />
                    {(formik.touched.lastName && formik.errors.lastName) && <Message className="form-text" text='danger'>{formik.errors.lastName}</Message>}
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <Input name="email"
                        className="form-control"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} />
                    {(formik.touched.email && formik.errors.email) && <Message className="form-text" text='danger'>{formik.errors.email}</Message>}
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <Input type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} />
                </div>
                {(formik.touched.password && formik.errors.password) && <Message className="form-text" text='danger'>{formik.errors.password}</Message>} 

                <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                    <Input type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        name="confirmPassword"
                        value={formik.values.confirmPassword}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} />
                </div>
                {(formik.errors.confirmPassword) && <Message className="form-text" text='danger'>{formik.errors.confirmPassword}</Message>} 

                <div className="mb-3 form-check">
                    <Input type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1" 
                        name="agree"
                        checked={formik.values.agree}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} />
                    <label className="form-check-label" htmlFor="agree">Check me out</label>
                </div>
                {formik.errors.agree && <Message className="form-text" text='danger'>{formik.errors.agree}</Message>}
                
                <div>
                    <Button type="submit"
                        className="btn btn-primary"
                        disabled={!formik.isValid}
                        >Submit
                    </Button>
    {/* пока прикрутим на эту кнопку логин */}
                </div>
                <Button type='button' onClick={onReg}>(GraphQl)Registration</Button>
                {/* <Button type='button' onClick={onLogin}>GraphQl(Login)</Button> */}
                <Button type='button' onClick={onUsers}>GraphQl(onUSERS)</Button>
                <Button type='button' onClick={onGetUser}>GraphQl(getUser1)</Button>
                <Button type='button' onClick={onUserChangeNick}>Change Nick</Button>
                {/* <Button type='button' onClick={onUserChangeAvatar}>Change Nick(</Button> */}
                <Button type='button' onClick={() => navigate('/')}>Back to Login</Button>
                <Button type='button' onClick={() => navigate('/main')}>MAIN</Button>
            </form>
            {/* <img src={`http://hipstagram.asmer.fs.a-level.com.ua/images/6a234ff08b1b5454e6266a9ce3815248`}/> */}
    </div>
    )
}

export default Signup
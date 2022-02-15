import {React, useRef, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../components/Button";
import Input from "../components/Input";
import Message from "../components/Message";
import { useFormik } from 'formik'
import { useNavigate } from "react-router-dom";
import * as yup from 'yup'
import { isVisible } from "@testing-library/user-event/dist/utils";
import { gql } from "../gql/gql";
import { isAuthTrue } from "../store/auth/authAction";
import jwtDecode from "jwt-decode";

const Login = () => {
    

// 123@gmail.com    
// 12345 пасс для проверки логинизации через токен 
    const navigate = useNavigate()
    const isAuth = useSelector(state => state.auth.isAuth)
    const dispatch = useDispatch()

    const isAdmin = useSelector(state => state.auth.isAdmin)
    console.log('Is admin ', isAdmin)

    const onSubmit = (values) => {
        console.log(' >> submit', values)

        const query = `
        query login($login: String!, $password: String!) {
            login(login: $login, password: $password)
            }
        `
        const variables = {
        login: formik.values.email,
        password: formik.values.password,
        }

        gql(query, variables)
        // .then(data => console.log('log after gql', data))
        .then(res => localStorage.setItem("token", res.data.login))
        
        if (localStorage.getItem("token") !== null) {
        dispatch(isAuthTrue())
        console.log(isAuth)
        navigate('/main')

        // if (localStorage.getItem("token") != null) {
            
        //     console.log('isAuth', isAuth)
        //     navigate('/main')}

        // Почему не перенаправляет сразу ? 
    }

    console.log("Local Storage",localStorage.getItem("token"))

    
    }
    
    // Конец Submit 

    const initialValues = {
        email: '',
        password: '',
        agree: false,
    }

    const REGEX_EMAIL = /\S+@\S+\.\S+/;

    const validationSchema = yup.object().shape({
        email: yup.string().required().email(),
        password: yup.string().required().min(5).max(15),
        agree: yup.boolean().test('is-agree', 'Обязательно', (value) => value),
    })

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
    })
    const inputRef = useRef(false)

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus()
        }
    }, [isVisible])
    



    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <Input name="email"
                        className="form-control"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} 
                        ref={inputRef}/>
                    {(formik.touched.email && formik.errors.email) && <Message className="form-text" text='danger'>{formik.errors.email}</Message>}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <Input type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange} />
                </div>
                {(formik.errors.password) && <Message className="form-text" text='danger'>{formik.errors.password}</Message>} 
                {/* почему-то не показывается окно под паролем (formik.touched.password && formik.errors.password) */}
                <div className="mb-3 form-check">
                    <Input type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1" 
                        name="agree"
                        checked={formik.values.agree}
                        onChange={formik.handleChange} />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                {formik.errors.agree && <Message className="form-text" text='danger'>{formik.errors.agree}</Message>}
                <div>
                    <Button type="submit"
                        className="btn btn-primary"
                        disabled={!formik.isValid} >Submit
                    </Button>
                </div>
                <Button type='link' onClick={() => navigate('/signup')}>Registration</Button>
            </form>
        </div>
    )
}

export { Login }


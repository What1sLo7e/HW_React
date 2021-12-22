import React, {Component, useState} from 'react';



const Form = (props) => {
    // const [firstName, setFirstName] = useState('')
    // const [lastName, setLastName] = useState('')


    const [state, setState] = useState({
        firstName:'',
        lastName:''
    })

    const onChange = (e) => {
        setState((state) => {
            return {
                 ...state, 
                 [e.target.name]: e.target.value
            }
        })
    }

    const isValidForm = () => {
        if (state.firstName === '' && state.lastName ==='') {
            console.log('Заполните поля')
        } else if (state.firstName === '') {
            console.log('Напишите свое Имя')
        } else if (state.lastName === '') {
            console.log('Напишите свою Фамилию')
        }
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(state)
        isValidForm()
    }

    // const onChangeFirstName = (e) => {
    //     setFirstName(e.target.value)
    // }

    // const onChangeLastName = (e) => {
    //     setFirstName(e.target.value)
    // }

    return(
        <form onSubmit={onSubmit}> 
            <input type='text' name='firstName' value={state.firstName} onChange={onChange}/>
            <input type='text' name='lastName' value={state.lastName} onChange={onChange}/>
            <button type='submit'></button>
        </form>
    )
}

export default Form;

//  Не понимаю как сделать чтобы submit не работал если форма не заполнена 
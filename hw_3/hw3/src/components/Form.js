import React, {Component} from 'react';


class Form extends Component {
    state = {
        firstName:'',
        lastName:''
    }

    onChange = (e) => {
        this.setState(() => {
            return {
                 ...this.state, 
                 [e.target.name]: e.target.value
            }
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
        this.isValidForm()
    }

    isValidForm = () => {
        if (this.state.firstName === '' && this.state.lastName ==='') {
            console.log('Заполните поля')
        } else if (this.state.firstName === '') {
            console.log('Напишите свое Имя')
        } else if (this.state.lastName === '') {
            console.log('Напишите свою Фамилию')
        }
    } 


    render () {
        return (
        <div>
            <form onSubmit={this.onSubmit}>
                <div className="mb-3">
                    <label  className="form-label">UserName</label>
                    <input name='firstName' type='text'
                    value={this.state.firstName}  
                    onChange={this.onChange}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type='text' name='lastName' 
                    value={this.state.lastName} 
                    onChange={this.onChange}/>
                </div>
                <button type="submit" >Отправить</button>
            </form>
        </div>
        )
    }
}



export default Form;
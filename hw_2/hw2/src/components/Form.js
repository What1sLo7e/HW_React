import React, {Component} from 'react';


class Form extends Component {

    onConsoleLog = () => {
        if (document.getElementById("userName").value && 
        document.getElementById("password").value){
        alert('userName:' + document.getElementById("userName").value  +
        ' password:' + document.getElementById("password").value)}

         else if (document.getElementById("userName").value) {

            document.getElementById("showAlert").innerHTML = 'Не заполнено поле password'

        } else {
            document.getElementById("showAlert").innerHTML = 'Не заполнено поле userName'
        }
    } 


    render () {
        return (
        <div>
            <form>
                <div className="mb-3">
                    <label  className="form-label">userName</label>
                    <Input id='userName' type='text'/>
                </div>
                <div className="mb-3">
                    <label className="form-label">password</label>
                    <Input id='password' type='password'/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.onConsoleLog}>Отправить</button>
            </form>
            <div id='showAlert'></div>
        </div>
        )
    }
}

function Input(props) {
    return (<input type={props.type} className="form-control" id={props.id}/> )
}

export default Form;
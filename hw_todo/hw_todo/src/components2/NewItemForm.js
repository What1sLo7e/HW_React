import React from "react"
import Icon from "./Icon"
import Input from './Input'
import { Button } from "./Button"

const NewItemForm = ({ onDone, onCancel, onChange, placeholder, ...props }) => {
    const onSubmit = (e) => {
        e.preventDefault()
        onDone()
    }

return (
    <form className="d-flex justify-content-between" onSubmit={onSubmit}>
        <Input placeholder={placeholder} {...props}/>
        <Button type='submit' variant='outline-primary' className={"btn btn-light"}><Icon name="check2"/></Button>
        <Button type='button' onClick={onCancel} variant='outline-primary' className={"btn btn-light"}><Icon name="x-lg"/></Button>
    </form>
    )

}

export default NewItemForm
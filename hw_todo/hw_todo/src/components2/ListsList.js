import React from "react";
import NewItemForm from './NewItemForm'
import { useSelector, useDispatch } from 'react-redux'
import { ListItem } from "./ListItem";
import { Button } from "./Button";
import { setNewList, hidden, toggle, visible, saveNewList } from '../store/newList'
import { combineReducers } from "redux";

 
const ListsList = () => {
    const lists = useSelector(state => state.todo.lists)
    const isVisibleNewList = useSelector(state => state.newList.visible)
    const newList = useSelector(state => state.newList.value)
    const dispatch = useDispatch()

    const onShowNewListForm = () => {
        dispatch(toggle())
    }

   
    const onChangeNewList = (e) => {
        dispatch(setNewList(e.target.value))
    }
    const onDoneNewList = () => {
        dispatch(saveNewList())
    }
    const onCancelNewList =() => {
        dispatch(setNewList(''))
        dispatch(hidden())
    }
    console.log(lists)
    
    return (
        <div> 
            <ul className='list-group mb-3'>
                {lists && Object.keys(lists).map((listId) => (
                    <ListItem key={listId} {...lists[listId]} /> 
                ))}
                {isVisibleNewList && <ListItem>
                   <NewItemForm 
                    value={newList}
                    onDone={onDoneNewList}
                    onCancel={onCancelNewList}
                    onChange={onChangeNewList} 
                    placeholder='New List'/> 
                </ListItem> }
            </ul>
            <Button onClick={onShowNewListForm} className={"btn btn-primary"}>New List</Button>
        </div>
    )   
}

export default ListsList
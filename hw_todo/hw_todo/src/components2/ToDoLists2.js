import React from "react";
import Filter from './Filter'
import ListsList from './ListsList'
// import NewItemForm from './NewItemForm'

const ToDoLists2 = () => { 
    return (
        <div>
            <Filter placeholder='search by list'/>
            <ListsList/>
        </div>
    )
}

export default ToDoLists2

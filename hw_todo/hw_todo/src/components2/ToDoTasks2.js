import React from "react";
import Filter from '../components2/Filter'
import TasksList from './TasksList'

const ToDoTasks2 = () => { 
    return (
        <div>
            <Filter placeholder='search by tasks'/>
            <TasksList/>
        </div>
    )
}

export default ToDoTasks2
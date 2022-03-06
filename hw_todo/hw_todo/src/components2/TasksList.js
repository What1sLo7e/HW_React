import React from "react";
import {TaskItem} from './TaskItem'
import NewItemForm from "./NewItemForm";
import { Button } from "./Button";

const TasksList = () => {

    return( 
    <div> 
        <ul className={'list-group mb-3'}>
            <TaskItem/> 
            <TaskItem/> 
            <TaskItem>
               <NewItemForm placeholder='New Task'/> 
            </TaskItem> 
        </ul>
        <Button className={"btn btn-primary"}>New Task</Button>
    </div>
    )
}

export default TasksList
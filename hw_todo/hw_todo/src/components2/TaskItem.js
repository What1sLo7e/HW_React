import React from "react";
// import Input from './Input'
import { NavLink } from "react-router-dom";
import Icon from './Icon'

const TaskItem = ({ title, path,  active, children }) => {
    const classNames = ['list-group-item']

    if (active) {
        classNames.push('active')
    }

    return (
        <li className={classNames.join(' ')}>
            {children 
                ? children
                : (
                    <div className="d-flex w-100 justify-content-between">
                        {/* <NavLink to={path}>{title}</NavLink> */}
                        <span>
                        TaskItem
                            {/* <Icon name='pencil'/><Icon name='x-lg' color='danger'/> */}
                            {/* Не получилось отобразить иконки */}
                        </span>
                    </div>
                 )
                }

        </li>
    )
}

export {TaskItem} 
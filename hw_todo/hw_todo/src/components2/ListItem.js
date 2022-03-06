import React from "react";
// import Input from './Input'
import { NavLink, useLocation } from "react-router-dom";
import Icon from './Icon'
import ListsList from './ListsList';


const ListItem = ({ title, path, children }) => {
    const classNames = ['list-group-item']
    const { pathname } = useLocation()
    const isActive = pathname === path

    if (isActive) {
        
         classNames.push('active')
        
    }


    return (
        <li className={classNames.join(' ')}>
            {children 
                ? children
                : (
                    <div className="d-flex w-100 justify-content-between">
                        <NavLink to={path}>{title}</NavLink>
                        <span> 
                            <Icon name='pencil'/>
                            <Icon name='x-lg' color='danger'/>
                        </span>
                    </div>
                 )
                }

        </li>
    )
}

export {ListItem} 
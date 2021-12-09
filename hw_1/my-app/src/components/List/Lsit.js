import React from 'react';

export function ListItem({children, active}) {
    let className='list-group-item'
  
  if(active){
    className += 'active'
  }
  
    return (<li className={className}>{children}</li>)
  }
  
  
export  function List(props) {
    return (
      <ul className='list-group'>
          {props.children}
      </ul>
    )
  }

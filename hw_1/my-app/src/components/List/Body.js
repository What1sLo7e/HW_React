import React from 'react';

export function Body(props) {
    return (
      <ul className={props.className}>
            {props.children}
        </ul>
    )
  }
  
  
export  function Search(props){
    return <input className={props.className} type='search'></input>
  }
  
export function Div(props){
    return <div className={props.className} style={{marginTop: '30px'}}>{props.children}</div>
  }
export function LanguageLink(props){
    return (<a className={props.className} >{props.children}</a>)
  }
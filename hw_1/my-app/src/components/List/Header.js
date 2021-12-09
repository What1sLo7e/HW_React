import React from 'react';



export function Header(props) {
    return (
      <ul className={props.className}>{props.children}</ul>
    )
  }
export  function Links(props) {
    return (
      <ul className={props.className} >{props.children}</ul>
    )
  }
  
 export function HeaderImgButtons(props) {
    return (
      <ul className={props.className}>{props.children}</ul>
    )
  }
  
  
 export function ButtonLink(props) {
    return (
      <li className={props.className}>{props.children}</li>
    )
  }
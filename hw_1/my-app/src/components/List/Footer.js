import React from 'react';


export function Footer(props) {
    return (
      <div className={props.className}>
            {props.children}
        </div>
    )
  }

  
  export function FooterDiv(props) {
    return (
      <ul className={props.className} style={{marginTop: '100px'}}>
            {props.children}
        </ul>
    )
  }
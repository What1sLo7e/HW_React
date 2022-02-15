import {React, forwardRef} from "react";

const Input = forwardRef((props, ref) => {
    return (
        <input ref={ref} {...props}></input>
        )
}) 
 
export default Input
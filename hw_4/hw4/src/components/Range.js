
import React, { useState} from 'react';



const Range = () => {
    const [state, setState] = useState({value: 0}) 

    const onChange = (e) => {
        setState({value: e.target.value})
        document.getElementById("input2").value = state.value

    }


    return (
        <div>
                <input type="range" id="reg" defaultValue='1'
                min="0" max="100" onChange={onChange}/>
                <input id='input2' type="text"/>
            </div>
    )
}


export default Range;
import React, {Component} from 'react';


class Range extends Component {

    onRange = () => {
        
        document.getElementById("input2").value = document.getElementById("reg").value
    }

    render () {
        return (
            <div>
                <input type="range" id="reg" defaultValue='1'
                min="0" max="100" onChange={this.onRange}/>
                <input id='input2' type="text"/>
            </div>
        )
    }
}


export default Range;
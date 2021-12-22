import React, {Component} from 'react';


class Range extends Component {
    state = {value: 0}

    onRange = (e) => {
        
        this.setState({value: e.target.value})
        document.getElementById("input2").value = this.state.value
    }


    render () {
        return (
            <div>
                <input type="range" id="reg" defaultValue='1'
                min="0" max="100" onChange={this.onRange}/>
                <input id='input2' type="number"/> 
            </div>
        )
    }
}


export default Range;
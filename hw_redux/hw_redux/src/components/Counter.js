import React, {Fragment, useState} from 'react';

const Counter = ({step = 1}) => { 
    const [count, setCount] = useState(0) // в useState(дефолтное значение)
    // const count = stateCounter[0] // useState() - возвращает массив с двумя элементами, первый - стейт, второй функция для изменения стейта 
    // const setCount = stateCounter[1]

    
    const onClick = () => {
        setCount(count + step)
    }

    const onClickMinus = () => {
        setCount(count - step)
    }

    return (
        <Fragment>
            <div>{count}</div>
            <button type='button' onClick={onClick}>+1</button>
            <button type='button' onClick={onClickMinus}>-1</button>
        </Fragment>
    ) 
}





// class Counter extends Component {
//     state = { count: 0 }

//     onIncrement = () => {
//         const newValue = this.state.count + 1
//         this.setState({count: newValue});
//     }

//     onDecrement = () => {
//         this.setState({count: this.state.count - 1})
//     }

//     render () {
//         return (
//             <div>
//                 <div>{this.state.count}</div>
//                 <button type='button' onClick={this.onIncrement}>+</button>
//                 <button type='button' onClick={this.onDecrement}>-</button>
//             </div>
//         )
//     }
// }


export default Counter;
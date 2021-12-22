import React, {Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';




ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();





// class Clock extends Component {
//   constructor(props) {
//     super(props);

//     this.state = { date: new Date() }

//   }

//   componentDidMount () {
//     setInterval(() => {
//       this.setState({ date: new Date() })
//     }, 1000)
//   }

//   componentWillUnmount () {

//   }

//   render() {
//     return ( <h1>{this.state.date.toLocaleTimeString()}</h1> )
//   }
// }
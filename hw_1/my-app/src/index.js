import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {HeaderImgButtons, Header, Links, ButtonLink} from './components/List/Header';
import { Body, Search, Div, LanguageLink } from './components/List/Body';
import img from './img/google_logo.svg';
import '../src/style.css';
import {Footer, FooterDiv} from './components/List/Footer'


const Button = ({children, props}) => {
  return <button type='button'>{children}</button>
}



function App() {
  return (
    <React.Fragment>
        <Header className='container'>
          <Links className='row justify-content-end'>
            <ButtonLink  className="col-md-auto btn">Почта</ButtonLink>
            <ButtonLink  className="col-md-auto btn">Картинки</ButtonLink>
          
          
            <ButtonLink  className="col-md-auto btn">Приложения</ButtonLink>
            <ButtonLink  className="col-md-auto btn">Аккаунт</ButtonLink>
          </Links>
        </Header>

        <Body className='container'>
        <img src={img}/>
          <Div className='row'>
            <Search className='form-control'></Search>
            <ButtonLink className='col btn align-self-center'>Поиск в Google</ButtonLink>
            <ButtonLink className='col btn align-self-center'> Мне повезёт!</ButtonLink>
            <Div >Сервисы Google доступны на разных языках: 
              <LanguageLink className='blue'> українська</LanguageLink>
            </Div>
          </Div>
        </Body>

        <Footer className='container'>
        <FooterDiv className='row'>
            <ButtonLink className="col-md-auto btn">Украина</ButtonLink>
            <ButtonLink className="col-md-auto btn">Все о Google</ButtonLink>
            <ButtonLink className="col-md-auto btn">Реклама</ButtonLink>
            <ButtonLink className="col-md-auto btn">Для бизнеса</ButtonLink>
            <ButtonLink className="col-md-auto btn">Как работает Google поиск</ButtonLink>
            <ButtonLink className="col-md-auto btn">Конфиденциальность</ButtonLink>
            <ButtonLink className="col-md-auto btn">Условия</ButtonLink>
            <ButtonLink className="col-md-auto btn">Настройки</ButtonLink>
          </FooterDiv>
        </Footer>
   
    </React.Fragment>
  )
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);




// Код занятия 

// const Obj = {
//   Welcome: (props) => <h1>Hello1, {props.name}</h1>
// }

// const Button = ({children, props}) => {
//   return <button type='button'>{children}</button>
// }

// function Wellcome(props) {
//   return  <h1>Hello, {props.name}</h1>
// } 


// class Hello extends React.Component {
//   render() {
//     return (
//       <React.Fragment>
//         <h1>Hello, {this.props.name}</h1>
//         <h2>12</h2>
//       </React.Fragment>
//       )
//   }
// }



// const item = [5,6,7] 
// const users = [
//   {name: 'V'},
//   {name: 'P', active:true},
//   {name: 'D'},
// ];

// function App() {
//   return (
//     <React.Fragment>
//       <List>
//         {item.map((item) => <ListItem>{item}</ListItem>)}
//       </List>
//       <br/>
//       <List color='red'>  
//         {users.map((user) => <ListItem active={user.active}>{user.name}</ListItem>)}
//       </List>
//     </React.Fragment>
//   )
// }

// ReactDOM.render(
//   <App/>,
//   document.getElementById('root')
// );

import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

function formatName(user) {
  return user.firtName + '' + user.lastName;
}
const user = {
  firtName: 'Gojart',
  lastName: 'Demiri'
};
const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>

);
function getGreeting(){
if(user) {
  return <h1>Hello {formatName(user)}</h1>;
}
return <h1>Hello.Jimmy.</h1>
}
return(getGreeting());
}



export default App;

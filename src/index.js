import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddClient from './components/newClient'

const Root =()=>{
  return(
    <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<App/>}/>
      <Route path="/nouveauclient" element={<AddClient/>}/>
      </Routes>
    </BrowserRouter>
  )
}







ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

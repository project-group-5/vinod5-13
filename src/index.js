import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './login'
import AddEntries from './component/add'
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import reducer from './reducer/reducer';
import Update from './component/update';
import Delete from './component/delete';
import View from './component/find'
import UserRegister from './userregister';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store=createStore(reducer,applyMiddleware(thunk))
store.subscribe(()=>{
  console.log(store.getState())
})
root.render(
  <Provider store={store}>
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/register" element={<UserRegister/>}/>
      <Route path="/home" element={<App/>}>
      <Route path="/home/add" element={<AddEntries/>}/>
      <Route path="/home/update" element={<Update/>}/>
      <Route path="/home/delete" element={<Delete/>}/>
      <Route path="/home/view" element={<View/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

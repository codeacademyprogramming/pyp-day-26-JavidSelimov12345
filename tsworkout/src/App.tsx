import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import {State} from './state/reducers/index'
import {bindActionCreators} from 'redux'
import { actionCreators } from './state';


function App() {

   const state = useSelector((state:State) => state.account)
   const dispatch = useDispatch()
   const {addMoney,bancrot,withdrawMoney} = bindActionCreators(actionCreators,dispatch)
   

  return (
    <div className="App">
      <h1>{state}</h1>
      <button onClick={()=>addMoney(100)}>Add</button>
      <button onClick={()=>withdrawMoney(100)}>Withdraw</button>
      <button onClick={()=>bancrot()}>Bancrot</button>
    </div>
  );
}

export default App;

import { useDispatch, useSelector } from "react-redux"
import { bindActionCreators } from "redux"
import { actionCreators } from "./state"



function App () {
  
  const state = useSelector(state => state.account)

  const dispatch = useDispatch()

  const {addMoney,withdrawMoney} = bindActionCreators(actionCreators,dispatch)
  
 
  return <>
      <h1>{state}</h1>
      <button onClick={()=>addMoney(1000)}>add</button>
      <button onClick={()=>withdrawMoney(1000)}>withdraw</button>
     
  </>
}

export default App

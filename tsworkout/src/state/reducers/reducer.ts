
import {types} from '../../state/index'

export const reducer = (state:number=0,action:types.Action)=>{
    switch(action.type){
        case types.actionTypes.ADD:
          return state + action.payload
         case types.actionTypes.WITHDRAW:
             return state - action.payload 
        case types.actionTypes.BANCROT:
            return 0     
        default:
            return state    
    }
}
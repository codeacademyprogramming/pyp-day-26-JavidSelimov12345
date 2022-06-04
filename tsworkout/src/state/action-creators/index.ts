import {types} from '../index'
import {Dispatch} from 'redux'

export const addMoney = (amount:number)=>{
    return (dispatch:Dispatch<types.Action>) =>{
        dispatch({
            type:types.actionTypes.ADD,
            payload:amount
        })
    }
}
export const withdrawMoney=(amount:number)=>{
    return (dispatch:Dispatch<types.Action>) =>{
        dispatch({
            type:types.actionTypes.WITHDRAW,
            payload:amount
        })
    }
}
export const bancrot =()=>{
    return (dispatch:Dispatch<types.Action>) =>{
        dispatch({
            type:types.actionTypes.BANCROT,

        })
    }
}
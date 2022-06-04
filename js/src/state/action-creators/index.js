
export const addMoney = (amount)=>{
    return (dispatch) =>{
        dispatch({
            type: "ADD",
            payload: amount
        })
    }
}

export const withdrawMoney = (amount)=>{
    return (dispatch) =>{
        dispatch({
            type:"WITHDRAW",
            payload:amount
        })
    }
}

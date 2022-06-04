export enum actionTypes{
    ADD="ADD",
    WITHDRAW="WITHDRAW",
    BANCROT="BANCROT"
}

interface add{
    type:actionTypes.ADD
    payload:number
}
interface withdraw{
    type:actionTypes.WITHDRAW
    payload:number
}
interface bancrot{
    type:actionTypes.BANCROT
}
export type Action = add| withdraw| bancrot
import { combineReducers } from "redux";
import reducer from "./reducers";

const rootReducer = combineReducers({
    account: reducer
})

export default rootReducer
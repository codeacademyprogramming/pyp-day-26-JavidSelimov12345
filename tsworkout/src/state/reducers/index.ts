
import { combineReducers } from 'redux'
import { reducer } from './reducer'

export const rootReducer = combineReducers({
      account: reducer
})

export type State = ReturnType<typeof rootReducer>
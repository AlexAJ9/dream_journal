import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import dreamReducer from './reducers/dreamReducer'
import filterReducer from './reducers/filterReducer'

const reducer = combineReducers({
    dreams: dreamReducer,
    filter: filterReducer
})

const store = createStore(reducer, applyMiddleware(thunk))
export default store
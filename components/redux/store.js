import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import usersReducer from './reducers/usersReducer'
import authReducer from './reducers/authReducer'

const reducer = combineReducers({ usersReducer,authReducer});
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware )
);
const store = createStore(reducer, middleware);
export default store;
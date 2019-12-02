import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import usersReducer from './reducers/usersReducer'
import authReducer from './reducers/authReducer'
import singleMeditationReducer from './reducers/singleMeditationReducer'

const reducer = combineReducers({ usersReducer,authReducer,singleMeditationReducer});
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware )
);
const store = createStore(reducer, middleware);
export default store;

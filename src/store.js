import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import combineReducers from './redux/reducer/rootReducer';


const store = createStore(combineReducers, composeWithDevTools(applyMiddleware(createLogger, thunk)));
export default store;
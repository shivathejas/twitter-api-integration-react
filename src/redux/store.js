import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import searchReducer from './search/searchReducer';
// combine reducer is used to combine multiple reducers and pass to create store,bcoz create store can
// accept only single object as reducer
import {combineReducers} from 'redux';

const rootReducers= combineReducers({
    search: searchReducer,
})
const store = createStore(rootReducers,composeWithDevTools(applyMiddleware(logger, thunk)));
export default store;
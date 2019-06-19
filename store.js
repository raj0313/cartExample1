import{createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import { makeRootReducer } from './reducers';
const log = createLogger({ diff: true, collapsed: true });
const enhancers =[];


// a function which can create our store and auto-persist the data


export default (initialState) =>{
const middleware = [thunk,log]
const store = createStore(
    makeRootReducer(),
    initialState,
    compose(
        applyMiddleware(...middleware),
        ...enhancers
       
    )
);

return store;



}
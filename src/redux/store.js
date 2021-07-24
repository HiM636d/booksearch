import {createStore} from 'redux';
import reducers from './reducers/index';

const store = createStore(reducers,{},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
//setting up the store ,"reducers' defined in reducers/index.js ,empty object and the redux devtool to allow visuals debugging and tracking of state 
export default store;
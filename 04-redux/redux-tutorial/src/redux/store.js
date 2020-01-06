import {createStore} from 'redux';
import helloReducer from './reducer';

export default createStore(helloReducer);
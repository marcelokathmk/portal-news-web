import { combineReducers } from 'redux';
import LoginReducer from '../pages/login/LoginReducer';

const rootReducer = combineReducers({
    login: LoginReducer
})

export default rootReducer
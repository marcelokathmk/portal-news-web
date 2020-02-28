import { combineReducers } from 'redux';
import LoginReducer from '../pages/login/LoginReducer';
import DrawerMenuReducer from '../components/drawerMenu/DrawerMenuReducer';

const rootReducer = combineReducers({
    login: LoginReducer,
    menus: DrawerMenuReducer
})

export default rootReducer
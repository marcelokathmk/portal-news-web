const INITIAL_STATE = {menusUsuario: {}}

export default function(state = INITIAL_STATE, action){
    switch (action.type) {
        case 'MENUS_USUARIO':
            return { 
                ...state, 
                menusUsuario: action.payload.data
            }
        default:
            return state
    }
}
const INITIAL_STATE = {usuarioLogado: {}, authorization: ''}

export default function(state = INITIAL_STATE, action){
    switch (action.type) {
        case 'EXECUTE_LOGIN':
            return { 
                ...state, 
                authorization: action.payload.headers.authorization
            }
        case 'USUARIO_LOGADO_RETORNO':
            return { 
                ...state, 
                usuarioLogado: action.payload.data 
            }
        default:
            return state
    }
}
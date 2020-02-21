import { LOGIN, USUARIO_LOGADO } from '../../api/ApiConstants';
import { post, get } from '../../api/ApiUtil';

export function executeLogin(usuario, senha){
    const body = { email: usuario, senha: senha}
    const request = post(LOGIN, body);
    return {
        type: 'EXECUTE_LOGIN',
        payload: request
    }
}

export function obterUsuarioLogado(authorization){
    const header = { headers: { Authorization:  authorization}};
    const request = get(USUARIO_LOGADO, header);
    return {
        type: 'USUARIO_LOGADO_RETORNO',
        payload: request
    }
}
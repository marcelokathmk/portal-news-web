import { MENU } from '../../api/ApiConstants';
import { get } from '../../api/ApiUtil';

export function obterMenusUsuario(modulo, perfis){
    const header = { headers: { Authorization:  localStorage.getItem('authorization')}};
    const request = get(MENU+'?id_modulo='+modulo+'&id_perfil='+perfis, header);
    return {
        type: 'MENUS_USUARIO',
        payload: request
    }
}
import { CATEGORIA } from '../../api/ApiConstants';
import { get } from '../../api/ApiUtil';

export function obterCategorias(){
    const header = { headers: { Authorization:  localStorage.getItem('authorization')}};
    return get(CATEGORIA, header);
}
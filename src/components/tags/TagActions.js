import { TAG } from '../../api/ApiConstants';
import { get } from '../../api/ApiUtil';

export function obterTags(){
    const header = { headers: { Authorization:  localStorage.getItem('authorization')}};
    return get(TAG, header);
}
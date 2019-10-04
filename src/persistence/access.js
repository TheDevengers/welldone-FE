import api from '../utils/api';
import cookieStorage from './cookieStorage';

const { postUser } = api();
const { set } = cookieStorage();

export const doLogin =  (values) =>
  postUser(values)
  .then(({ access: accessKey, username, id }) => {
    set('accessKey', accessKey);
    set('username', username);
    set('id', id);
    window.location.href = '/';
  })
  .catch(() => new Error());

export const logout = () => {
  set('accessKey', null);
  window.location.href = '/Login'; // cambiará a futuro
};

import api from '../utils/api';
import cookieStorage from './cookieStorage';

const { postUser } = api();
const { set } = cookieStorage();

export const doLogin =  (values) =>
  postUser(values)
  .then(({ access: accessKey }) => {
    set('accessKey', accessKey);
    window.location.href = '/';
  });

export const logout = () => {
  set('accessKey', null);
  window.location.href = '/Login'; // cambiará a futuro
};

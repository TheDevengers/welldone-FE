import api from '../utils/api';
import { reject } from 'q';
import cookieStorage from './cookieStorage';

const { postUser } = api();
const { set, remove } = cookieStorage();

export const doLogin =  (values) =>
  postUser(values)
  .then(({ access: accessKey, username, id }) => {
    set('accessKey', accessKey);
    set('username', username);
    set('id', id);
    window.location.href = '/';
  })
  .catch((err) => {
    return ('user or password is wrong');
  });

export const logout = () => {
  remove('accessKey');
  remove('username');
  remove('id');

  window.location.href = '/Login'; // cambiará a futuro
};

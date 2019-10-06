import api from '../utils/apiUserProfile';

const { editUserInfo } = api();

export const editUserProfile = (id, values) => {
  return editUserInfo(id, values)
  .then(() => {
      console.log('Hecho correctamente');
    //window.location.href = '/';
  })
  .catch(() => new Error());
};

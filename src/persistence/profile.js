import api from '../utils/apiUserProfile';

const { editUserInfo, deleteUser } = api();

export const editUserProfile = (id, values) => {
  return editUserInfo(id, values)
  .then((errores) => {
      console.log('Peticion lanzada');
      console.log(errores);
    //window.location.href = '/';
  })
  .catch(() => new Error());
};

export const deleteUserProfile = (id) => {
  return deleteUser(id)
  .then(() => {
    window.location.href = '/';
  })
  .catch(() => new Error());
};

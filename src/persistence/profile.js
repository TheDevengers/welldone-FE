import api from '../utils/apiUserProfile';
import cookieStorage from './cookieStorage';

const { remove } = cookieStorage();
const { editUserInfo, deleteUser } = api();

export const editUserProfile = (id, values) => {
  return editUserInfo(id, values)
  .then((updateResponse) => {
      if(updateResponse.error){
        return updateResponse;        
      }    

      // user edited and return to home
      window.location.href = '/';
    
  })
  .catch(() => new Error());
};

export const deleteUserProfile = (id) => {
  return deleteUser(id)
  .then(() => {
    remove('accessKey');
    remove('username');
    remove('id');
    window.location.href = '/login';
  })
  .catch(() => new Error());
};

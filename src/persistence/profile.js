import api from '../utils/apiUserProfile';

const { editUserInfo, deleteUser } = api();

export const editUserProfile = (id, values) => {
  return editUserInfo(id, values)
  .then((updateResponse) => {
    console.log(updateResponse);
      if(updateResponse.error){
        return updateResponse;        
      }    

      // user edited and return tu home
      window.location.href = '/';
    
  })
  .catch(() => new Error());
};

export const deleteUserProfile = (id) => {
  return deleteUser(id)
  .then(() => {
    window.location.href = '/login';
  })
  .catch(() => new Error());
};

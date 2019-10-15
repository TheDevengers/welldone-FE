import api from '../utils/apiUserProfile';
import cookieStorage from './cookieStorage';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const { remove } = cookieStorage();
const { editUserInfo, deleteUser } = api();

export const editUserProfile = (id, values) => {
  return editUserInfo(id, values)
  .then((updateResponse) => {
    if(updateResponse.error){
      toast.error('An error occurred when editing the profile information', {
        position: toast.POSITION.BOTTOM_CENTER
      });
      return updateResponse;
    }
    toast.success('User edited', {
      autoClose: 1000,
      position: toast.POSITION.BOTTOM_CENTER
    });
  })
  .catch((error) => console.log(error));

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

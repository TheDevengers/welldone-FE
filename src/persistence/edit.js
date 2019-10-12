import api from '../utils/api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const { editArticle } = api();

export const editItem = (id, values) => {
  return editArticle(id, values)
  .then(() => toast.success('Article edited', {
      autoClose: 1000,
      position: toast.POSITION.BOTTOM_CENTER
  }))
  .catch(() => toast.error('An error occurred when editing the article', {
    position: toast.POSITION.BOTTOM_CENTER
}))
  .finally(() => {
    window.location.href = '/';
  });
};

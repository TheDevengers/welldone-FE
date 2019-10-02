import api from '../utils/api';

const { editArticle } = api();

export const editItem = (id, values) => {
  return editArticle(id, values)
  .then(() => {
    window.location.href = '/';
  })
  .catch(() => new Error());
};

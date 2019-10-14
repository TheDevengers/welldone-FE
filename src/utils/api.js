import cookieStorage from '../persistence/cookieStorage';
import { errorHandler } from './errorHandler';
const { get } = cookieStorage();

const api = () => {
  return {
    postUser: (data) => {
      return fetch(`${ process.env.REACT_APP_API }/token/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then((res) => res.json())
      .then((articles) => articles)
      .catch((error) => console.log('Error:', error));
    },

    getArticles: () => {
      return fetch(`${ process.env.REACT_APP_API }/articles`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${get('accessKey')}`
        },
      })
      .then((res) => errorHandler(res));
    },

    deleteArticle: (id) => {
      return fetch(`${ process.env.REACT_APP_API }/articles/${id}`, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${get('accessKey')}`
        }
      })
      .then((res) => errorHandler(res))
      .catch((err) => console.log(err));
    },

    editArticle: (id, data) => {
      return fetch(`${ process.env.REACT_APP_API }/articles/${id}`, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${get('accessKey')}`
        },
        body:JSON.stringify(data)
      })
      .then((res) => errorHandler(res));
    },

    getCategories: () => {
      return fetch(`${ process.env.REACT_APP_API }/categories`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${get('accessKey')}`
        }
      })
      .then((res) => errorHandler(res));
    },

    getArticle: (id) => {
      return fetch(`${ process.env.REACT_APP_API }/articles/${id}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${get('accessKey')}`
        }
      })
      .then((res) => errorHandler(res));
    },

    getFavorites: () => {
      return fetch(`${process.env.REACT_APP_API}/favorites`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${get('accessKey')}`
        }
      })
      .then((res) => errorHandler(res));
    }
  };
};

export default api;
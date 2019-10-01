import cookieStorage from '../persistence/cookieStorage';
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
      .then((res) => res.json())
      .then((articles) => articles)
      .catch((err) => console.err(err));
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
      .then((res) => res.json())
      .then((data) => console.log('Article deleted'))
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
      .then((res) => res.json())
      .then((response) => response)
      .catch((err) => console.log(err));
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
      .then((res) => res.json())
      .then((categories) => categories)
      .catch((err) => console.log(err));
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
      .then((res) => res.json())
      .then((article) => article)
      .catch((err) => console.log(err));
    }
  };
};

export default api;
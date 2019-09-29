const api = () => {
  // const BASE_URL = 'http://localhost:8000/api/v1/';
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
      .catch((error) => console.error('Error:', error));
    },

    getArticles: () => {
      fetch(`${ process.env.REACT_APP_API }/articles`)
      .then((res) => res.json())
      // .then((data) => console.log(data))
      .catch((err) => console.err(err));
    },

    deleteArticle: (id) => {
      fetch(`${ process.env.REACT_APP_API }/articles/${id}`, {
        method: 'DELETE'
      })
      .then((res) => res.json())
      .then((data) => console.log('Article deleted:', data))
      .catch((err) => console.err(err));
    }
  };
};

export default api;
const api = () => {
  const BASE_URL = 'http://localhost:8000/api/v1/';
  return {
    postUser: (data) => {
      return fetch(`${ BASE_URL }token/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then((res) => res.json())
      .catch((error) => console.error('Error:', error));
    }
  };
};

export default api;
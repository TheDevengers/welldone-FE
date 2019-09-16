const api = () => {
  return {
    postUser: (data) => {
      return fetch('http://localhost:8000/api/token/', {
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
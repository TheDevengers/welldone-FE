import cookieStorage from '../persistence/cookieStorage';
const { get } = cookieStorage();

const apiUserProfile = () => {
  return {
    
    getUserInfo: (id) => {
        return fetch(`${ process.env.REACT_APP_API }/users/${id}`, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${get('accessKey')}`
          }
        })
        .then((res) => res.json())
        .then((userInfo) => userInfo)
        .catch((err) => console.log(err));
      },

      editUserInfo: (id, data) => {
        return fetch(`${ process.env.REACT_APP_API }/users/${id}`, {
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

      deleteUser: (id) => {
        return fetch(`${ process.env.REACT_APP_API }/users/${id}`, {
          method: 'DELETE',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${get('accessKey')}`
          }
        })
        .then((res) => res.json())
        .then((data) => console.log('User deleted'))
        .catch((err) => console.log(err));
      },

  };
};

export default apiUserProfile;
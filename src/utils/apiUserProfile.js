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

  };
};

export default apiUserProfile;
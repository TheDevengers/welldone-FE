import Cookies from 'js-cookie';

const cookieStorage = () => {
  const set = (key, value) => {
    return Cookies.set(key, value);
  };
  const get = (key) => {
    return Cookies.get(key);
  };

  return {
    set,
    get
  };
};

export default cookieStorage;
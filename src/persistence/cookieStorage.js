import Cookies from 'js-cookie';

const cookieStorage = () => {
  const set = (key, value) => {
    return Cookies.set(key, value);
  };
  const get = (key) => {
    return Cookies.get(key);
  };

  const remove = (key) => {
    return Cookies.remove(key);
  };

  return {
    set,
    get,
    remove
  };
};

export default cookieStorage;
import * as actionTypes from './actionTypes';

export const errorHandler = (response) => {
  let error = {};
  const types = {
    200: () => response.json(),
    201: () => response.json(),
    401: () => { error = {
      name: actionTypes.HTTP_401_ERROR,
      message: response.statusText
      };
      throw new Error(error.name, error.message);
    },
    500: () => {
      error = {
        name: actionTypes.HTTP_500_ERROR,
        message: response.statusText
      };
      throw new Error(error.name, error.message);
    },
    'default': () => {
      error = {
        name: actionTypes.HTTP_OTHER_ERROR,
        message: response.statusText
      };
      throw new Error(error.name, error.message);
    }
  };

  return types[ response.status || 'default' ]();

};

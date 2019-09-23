const BASE_URL = 'http://127.0.0.1:8000/api/v1/';

export const doSignup = async (values) => {

  const result = await fetch(`${ BASE_URL }users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(values)
  });

  const data = await result.json();
  
  if (result.status === 400 ) {
    return {
      ...data,
      error: true
    }
  } 
  
  if (result.status === 201 ) {
    return {
      ...data,
      error: false
    }
  }

};

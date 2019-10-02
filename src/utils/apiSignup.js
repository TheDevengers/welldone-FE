export const doSignup = async (values) => {

  const result = await fetch(`${ process.env.REACT_APP_API }/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(values)
  });

  const data = await result.json();

  if (result && result.status === 400 ) {
    return {
      ...data,
      error: true
    };
  }

  if (result && result.status === 201 ) {
    return {
      ...data,
      error: false
    };
  }

};

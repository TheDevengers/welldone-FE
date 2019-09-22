const BASE_URL = 'http://127.0.0.1:8000/api/v1/';

export const doSignup = async (values) => {

    // llegan los datos
    console.log(values)

    // llamo a la api con fetch
    return await fetch(`${ BASE_URL }users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',          
        },
        body: JSON.stringify(values),
      })
      .then((res) => {
        console.log('llego aqui')
        console.log(res)
        console.log(res.status)
        return res
      })
      .catch((error) => {
        console.error('Error:', error)
      });
}

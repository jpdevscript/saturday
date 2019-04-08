import axios from 'axios';


export const fetchFormData = async (formId) => {
  const hostName = window.location.hostname;
  const port = window.location.port;

  const response = await fetch(`http://${hostName}:${port}/forms/${formId}.json`);
  if (response.ok) {
    const resJson = await response.json();
    return resJson;
  }

  throw new Error(response.status);
}

export const postFormData = (formData) => {
  axios.post('http://localhost:5000/api/submit', {
    formData: formData,
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}


export const postInputChanges = (value, id, fieldType) => {
  axios.post('http://localhost:5000/api/log', {
    id,
    value,
    fieldType
  })
  .then(function (response) {
    // console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}

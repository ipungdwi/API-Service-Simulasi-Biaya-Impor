const axios = require('axios');

const fetchApi = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

module.exports = fetchApi;

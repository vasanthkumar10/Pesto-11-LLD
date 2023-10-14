const axios = require("axios");
const cache = require("./InMemoryCache");

const getUserData = async (id) => {
  if (cache.has(`user-${id}`)) {
    console.log("Fetching the data from cache");
    return cache.get(`user-${id}`);
  }
  console.log("Feching the data from server");
  const { data } = await axios.get(`https://reqres.in/api/users/${id}`);
  console.log("setting up the cache");
  cache.set(`user-${id}`, data);
  console.log("after setting user cache", cache);
  return data;
};

module.exports = { getUserData };

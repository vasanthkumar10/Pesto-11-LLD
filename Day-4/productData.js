const axios = require("axios");
const cache = require("./InMemoryCache");

const getProductData = async (id) => {
  if (cache.has(`product-${id}`)) {
    console.log("Fetching the data from cache");
    return cache.get(`product-${id}`);
  }
  console.log("Feching the data from server");
  const { data } = await axios.get(`https://reqres.in/api/products/${id}`);
  console.log("setting up the cache");
  cache.set(`product-${id}`, data);
  console.log("after setting product cache", cache);
  return data;
};

module.exports = { getProductData };

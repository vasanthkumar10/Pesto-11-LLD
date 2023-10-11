const uuid = require("uuid");

const generateId = () => uuid.v4();

module.exports = {
  generateId,
};

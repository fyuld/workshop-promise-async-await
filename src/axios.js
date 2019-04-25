require('dotenv').config();
const originalAxios = require('axios');

const axios = originalAxios.create({
  auth: {
    username: process.env.GITHUB_USERNAME,
    password: process.env.GITHUB_API_TOKEN
  }
});

module.exports = { axios };

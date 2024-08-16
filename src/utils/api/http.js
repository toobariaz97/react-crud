import axios from 'axios'

const http = axios.create({
    baseURL: 'http://localhost:5000/api', // TODO: take this api URL from env
    timeout: 30000,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },

  });


  export default http;
  
import axios from "axios";

axios.defaults.baseURL = "https://my-json-server.typicode.com/sepidehbiglarizadeh/Contact-Manager-App";

const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};

export default http;
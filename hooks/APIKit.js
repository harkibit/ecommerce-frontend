import axios from "axios";

// Create axios client, pre-configured with baseURL
let APIKit = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 50000,
});

// Set JSON Web Token in Client to be included in all calls
// export const setClientToken = token => {
//   APIKit.interceptors.request.use(function(config) {
//     config.headers.Authorization = `Bearer ${token}`;
// 	//config.headers.timezoneoffset = new Date().getTimezoneOffset();
//     return config;
//   });
// };

APIKit.interceptors.request.use(function (config) {
  config.headers.Authorization = `Bearer ${localStorage.jwt}`;
  config.headers.env = process.env.NODE_ENV;
  config.headers.timezoneoffset = localStorage.Timezone;
  return config;
});

export default APIKit;

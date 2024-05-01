import axios from "axios";
// esto es un interceptor
//se coloca en el medio de cada request que se hace de react al API
//Configura la peticion con los valores
axios.interceptors.request.use(
  (config) => {
    //la url base de nuestra llamada sera:
    //al ser la misma siempre , la dejamos establecida
    config.baseURL = "https://localhost:7101/api/";
    return config;
  },
  (error) => {
    return Promise.reject(error);
    //retorna un error en caso qu no se pueda conectar al end point
  }
);

//este interceptor se coloca luego del response que retorna el API rest
axios.interceptors.response.use(null, (error) => {
  return Promise.reject(error);
});

export default axios;

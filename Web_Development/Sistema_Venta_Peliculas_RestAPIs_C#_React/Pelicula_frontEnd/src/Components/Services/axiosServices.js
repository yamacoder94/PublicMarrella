import axios from "axios";
// esto es un interceptor
//se coloca en el medio de cada request que se hace de react al API
//Configura la peticion con los valores
axios.interceptors.request.use(
  (config) => {
    //la url base de nuestra llamada sera:
    //al ser la misma siempre , la dejamos establecida
    config.baseURL = "http://localhost:5000/api/";
    config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
    //retorna un error en caso qu no se pueda conectar al end point
  }
);

//este interceptor se coloca luego del response que retorna el API rest
axios.interceptors.response.use(null, (error) => {
  //No authorizado el tken expiro
  if (error.response.status === 401) {
    localStorage.clear();
    window.location.href = "/";
  }
  return Promise.reject(error);
});

export default axios;

namespace SistemaVenta.API.Utilidad
{
    public class Response<T>
    {
        //Se usa como respuesta a todas las solicitudes de las apis

        public bool status { get; set; }
        public T value { get; set; }
        public string msg { get; set; }
    }
}

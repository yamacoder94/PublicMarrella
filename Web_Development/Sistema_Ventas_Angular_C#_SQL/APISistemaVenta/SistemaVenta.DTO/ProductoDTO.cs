using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SistemaVenta.DTO
{
    public class ProductoDTO
    {
        public int IdProducto { get; set; }

        public string? NombreCompleto { get; set; }

        public int? IdCategoria { get; set; }
        public string? DescripcionCategoria { get; set; }

        public int? Stock { get; set; }

        public string? Precio { get; set; } //Cuando vamos a la base de datos , se conviertira en Decimel

        public int? EsActivo { get; set; }
    }
}

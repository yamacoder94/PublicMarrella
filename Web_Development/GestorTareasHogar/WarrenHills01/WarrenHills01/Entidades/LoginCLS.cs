using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WarrenHills01.Entidades
{
    public class LoginCLS
    {
        public long IdUsuario { get; set; }
        public bool Conectado { get; set; }
        public long Rol { get; set; }
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public string CorreoElectronico { get; set; }

    }
}
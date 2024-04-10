using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WarrenHills01.Entidades
{
    public class TipoCambioSistema
    {
        public double montoColones { get; set; }

        public double montoDolaresTCC { get; set; }

        public double montoDolaresTCV { get; set; }

        public Venta venta { get; set; }
        public Compra compra { get; set; }
    }

    // Root myDeserializedClass = JsonConvert.DeserializeObject<Root>(myJsonResponse); 
    public class Venta
    {
        public string fecha { get; set; }
        public double valor { get; set; }
    }

    public class Compra
    {
        public string fecha { get; set; }
        public double valor { get; set; }
    }
}
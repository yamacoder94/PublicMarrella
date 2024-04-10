using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net.Http;
using System.Web;
using WarrenHills01.Entidades;

namespace WarrenHills01.Models
{
    public class TipoCambioModel
    {

        public TipoCambioSistema ConsultarTC()
        {
            TipoCambioSistema tcs = new TipoCambioSistema();

            using (var cliente = new HttpClient())
            {
                string url = ConfigurationManager.AppSettings["urlApiCambioDolar"];
                HttpResponseMessage respuesta = cliente.GetAsync(url).Result;

                if (respuesta.IsSuccessStatusCode)
                {
                    var resultado = respuesta.Content.ReadAsAsync<TipoCambioSistema>().Result; //aqui da error si no se agrega el nuget system.formatting || el resultyado del api se converte en 
                    //clase TipoCambioSistema
                    return resultado;
                }

            }

            return null;
        }






    }
}

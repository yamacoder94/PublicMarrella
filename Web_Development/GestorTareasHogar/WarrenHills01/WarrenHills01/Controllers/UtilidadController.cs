using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WarrenHills01.Entidades;
using WarrenHills01.Models;

namespace WarrenHills01.Controllers
{
    public class UtilidadController : Controller
    {
        // GET: Utilidad
        [HttpGet] // nos lleva a la pagina para sacar tipo de cambio 
        public ActionResult TipoCambio()
        {

            ViewBag.Message = "Tipo de Cambio";
            Session["TareaRealizada"] = null;
            
            
            var respuesta = traeTipoCambio();

            if (respuesta != null)
            {
                ViewBag.compra = respuesta.compra.valor;
                ViewBag.venta = respuesta.venta.valor;
                Session["compra"] = respuesta.compra.valor;
                Session["venta"] = respuesta.venta.valor;


            }


            return View("TipoCambio");
        }

        public ActionResult RealizaCambio(double montoColones)
        {
            TipoCambioSistema cambio = new TipoCambioSistema();

            var compra = double.Parse(Session["compra"].ToString());
            var venta = double.Parse(Session["venta"].ToString());

            cambio.montoDolaresTCC = Math.Round(montoColones / compra, 2);
            cambio.montoDolaresTCV = Math.Round(montoColones / venta, 2);
            

            return Json(cambio, JsonRequestBehavior.AllowGet);

        }

        //trae tipo de cambio 
        public TipoCambioSistema traeTipoCambio()
        {

            TipoCambioModel tcm = new TipoCambioModel();
            return tcm.ConsultarTC();
            
        }

        
        
       
        
    
    }
}
using PagedList;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WarrenHills01.Entidades;

namespace WarrenHills01.Controllers
{
    public class HomeController : Controller
    {
        [HttpGet] //me lleva a pagina de incio de Warren
        public ActionResult Index(int? page)
        {
            

            //en caso que no se haya logueado nadie , nos regresa siempre a login
            if (Session["User"] == null)
            {
                return RedirectToAction("Index", "Login");
            }

            //si no esta vacia 
            if(Session["TareaRealizada"] != null) {
                var tareaHecha = Session["TareaRealizada"].ToString();
                ViewBag.TareaHecha = tareaHecha;
            }
            //recibe la variable de sesion que contiene la tarea hecha para la alerta de pagina de inciio si una tarea se finalizo

            
            ViewBag.Message = "Dashboard";
            var ListaHistorial = TraeListaHistorial();
            int pageSize = 4;
            int pageNumber = (page ?? 1);

            return View("Pruebas", ListaHistorial.ToPagedList(pageNumber, pageSize));
        }

        ///
        /// Metodos para llenar listas de tablas
        /// Metodo para llenar lista de gastos
        public List<Gasto_Mensual> TraeListaGastos()
        {
            using (var contexto = new WarrenHills01Entities())
            {
                var ListaGastos = (from x in contexto.Gasto_Mensual
                                 select x).ToList();

                return ListaGastos;
            }
        }

        //Retorna la vista parcial para lso gastos mensuales 
        [HttpGet]
        public ActionResult TraeListaGastosV()
        {
            List<Gasto_Mensual> lista = TraeListaGastos();
            return PartialView("TraeListaGastosV", lista);

        }

            //Metodo para traer lista de Dashboard

            public List<TareaSemanaUsuarios> TraeListaDash()
        {
            using (var contexto = new WarrenHills01Entities())
            {
                //lo mejor seria para no quebrar cabeza con un SP 
                //var ListaDash = (from x in contexto.Dashboard
                //                   select x).ToList();
                var ListaDash = contexto.ConsultaTareasUsuarios();
                var listVista = ListaDash.Select(i => new TareaSemanaUsuarios
                {
                    Nombre = i.Nombre,
                    Tarea = i.Tarea,
                    DiaSemana = i.DiaSemana
                }).ToList();
                
                return listVista;
            }
        }

        //Metodo para traer lista de Historial

        public List<HistorialTareas> TraeListaHistorial()
        {
            using (var contexto = new WarrenHills01Entities())
            {
                
                var ListaHisotorial = contexto.ConsultaHistoriaTareas();
                
                var listVista = ListaHisotorial.Select(i => new HistorialTareas
                {
                    Nombre = i.Nombre,
                    Tarea = i.Tarea,
                    Fecha = i.Fecha_Finalizacion,
                    
                    Comentario = i.Comentario
                }).ToList();

                return listVista;
            }
        }

        [HttpGet]
        public ActionResult TraeTareasUsuarioInicio()
        {
            //aca se llena la lista de tareas para que se cargue en la vista parcial
            var listaTareas = TraeListaDash();

            return PartialView("TraeTareasUsuarioInicio", listaTareas);
        }


        //Ya no se usa puesto que esta tabla paso a ser el modelo principal de la vista Pruebas
        //[HttpGet]
        //public ActionResult TraeHistorialTareas(int? page)
        //{
        //    var ListaHistorial = TraeListaHistorial();
        //    int pageSize = 3;
        //    int pageNumber = (page ?? 1);

        //    return PartialView("TraeHistorialTareas", ListaHistorial.ToPagedList(pageNumber, pageSize));
        
        //}


        }
}
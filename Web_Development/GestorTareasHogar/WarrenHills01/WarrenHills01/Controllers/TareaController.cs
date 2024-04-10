using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WarrenHills01.Entidades;

namespace WarrenHills01.Controllers
{
    public class TareaController : Controller
    {
        // GET: Tarea
        [HttpGet] 
        public ActionResult MisTareas()
        {
            if(Session["User"] == null) { return RedirectToAction("Index","Login"); } 
            ViewBag.Message = "Mis Tareas";
            //Se llena la lista de tareas de usuario
            var ListaTareasUser = TraeLista();
            Session["TareaRealizada"] = null;

            //nos lleva a la pgina de inicio de mis tareas
            //desde aca tieene que cargarse los dropdown para la parte de actulizar 
            
            llenaComboYVB(); //se llena el combo para la parte de actulizar la limpieza
            llenaComboBasura();
            return View("MisTareas", ListaTareasUser);
        }

        [HttpGet]
        public ActionResult RegistraTareaAdmin()
        {
            //nos lleva a la pgina de inicio de mis tareas 
            ViewBag.Message = "Registra Tarea";
            

                return View("RegistraTareaAdmin");
        }


        //Metodo para traer lista de Dashboard

        public List<TareaSemanaUsuarios> TraeLista()
        {
            using (var contexto = new WarrenHills01Entities())
            {
                ViewBag.Contador = 0;
                var usuario = (LoginCLS)Session["User"];
                
                //Se traen las actividades por usuario 
                var ListaTareaUsuario = contexto.TareasUsuarioUnico(Convert.ToInt32(usuario.IdUsuario));
                // estaba asi antes contexto.TareasUsuarioUnico(usuario.IdUsuario);
                var listVista = ListaTareaUsuario.Select(i => new TareaSemanaUsuarios
                {
                    
                    Tarea = i.tarea,
                    DiaSemana = i.DiaSemana
                }).ToList();

                return listVista;
            }
        }


        
        public ActionResult Realizartarea(String tarea,String coment)
        {
            //nos lleva a la pgina de inicio de mis tareas 
            ViewBag.Message = "Registra Tarea";
            var tamaComent = coment.Length;//para saber si el comentarios esta vacio
            if (tamaComent < 1) coment = "Sin comentarios";
            long IdT;//almacena id de tarea 
            using (var contexto = new WarrenHills01Entities())
            {
                //aca se tiene que inserta en la tabla de historial 
                var IdTarea = (from x in contexto.TareaSemanal
                                 where x.Descripcion == tarea
                               select x.IdTarea).FirstOrDefault();
                IdT = IdTarea;
                 
            }

            
            
            using (var contexto = new WarrenHills01Entities())
            {
                var usuario = (LoginCLS)Session["User"];
                var fecha = Convert.ToDateTime(DateTime.Now.ToString("yyyy-MM-dd"));
                //Se traen las actividades por usuario 
                contexto.InsertarHistorial(Convert.ToInt32(IdT), Convert.ToInt32(usuario.IdUsuario), fecha,coment);
                contexto.SaveChanges();
                Session["TareaDone"] = "hecho";

                Session["TareaRealizada"] = tarea;
                return Json("Exitosa", JsonRequestBehavior.AllowGet);
            }
            
        }

        //por efectos de archivos , se coloco metodo que llama a la vista parcial que llena el historial en practica 

        //Metodo que devuelve el combo lleno , y genera las Viewbags a utilizar 
        public void llenaComboYVB()
        {
            var dias = ListaDias(); // se llama a un metodo que puede ser usado cuando se quiera
            List<SelectListItem> ListaCombo = new List<SelectListItem>();
            //se llena el comboDeDias
            foreach (var item in dias)
            {
                ListaCombo.Add(new SelectListItem { Value = item.diaSemana, Text = item.diaSemana });
                ViewBag.DiaSemana = ListaCombo;
                //aca  se lleno el viewbag que tiene los dias de la semana
            }

            //se traen las descripciones de tareas y se cargan en viewbags para que se muestren en la vista
            using (var contexto = new WarrenHills01Entities())
            {
                var ListaTareas = (from x in contexto.TareaSemanal
                                   select x.Descripcion)
                                   .ToList();
                //para descripcion de Dropdowns en registro de Tareas
                ViewBag.DescripcionTarea1 = ListaTareas[0];
                ViewBag.DescripcionTarea2 = ListaTareas[1];
            }
        }



        //llena el drop de los dias para la limpieza , genera una lista con los dias disponibles
        public List<DiaSemana> ListaDias()
        {
            List<DiaSemana> dia = new List<DiaSemana>();
            dia.Add(new DiaSemana
            {
                codigo = 1,
                diaSemana = "Lunes"
            });
            dia.Add(new DiaSemana
            {
                codigo = 2,
                diaSemana = "Martes"
            });
            dia.Add(new DiaSemana
            {
                codigo = 3,
                diaSemana = "Miércoles"
            });
            dia.Add(new DiaSemana
            {
                codigo = 4,
                diaSemana = "Jueves"
            });
            dia.Add(new DiaSemana
            {
                codigo = 5,
                diaSemana = "Viernes"
            });
            dia.Add(new DiaSemana
            {
                codigo = 6,
                diaSemana = "Sábado"
            });
            dia.Add(new DiaSemana
            {
                codigo = 7,
                diaSemana = "Domingo"
            });
            return dia;
        }

        //LLena el combo de dias de Basura 
        public void llenaComboBasura()
        {
            var dias = ListaDiasBasura(); // se llama a un metodo que puede ser usado cuando se quiera
            List<SelectListItem> ListaCombo = new List<SelectListItem>();
            //se llena el comboDeDias
            foreach (var item in dias)
            {
                ListaCombo.Add(new SelectListItem { Value = item.diaSemana, Text = item.diaSemana });
                ViewBag.DiaSemana2 = ListaCombo;
                //aca  se lleno el viewbag que tiene los dias de la semana
            }

            //se traen las descripciones de tareas y se cargan en viewbags para que se muestren en la vista
            using (var contexto = new WarrenHills01Entities())
            {
                var ListaTareas = (from x in contexto.TareaSemanal
                                   select x.Descripcion)
                                   .ToList();
                //para descripcion de Dropdowns en registro de Tareas
                ViewBag.DescripcionTarea1 = ListaTareas[0];
                ViewBag.DescripcionTarea2 = ListaTareas[1];
            }
        }

        //llena lista de dias para la basura
        public List<DiaSemana> ListaDiasBasura()
        {
            List<DiaSemana> dia = new List<DiaSemana>();

            dia.Add(new DiaSemana
            {
                codigo = 4,
                diaSemana = "Miercoles"
            });


            dia.Add(new DiaSemana
            {
                codigo = 7,
                diaSemana = "Domingo"
            });
            return dia;
        }

        //metodo para actulizar tareas
        public ActionResult ActualizaTarea(string dia, string tarea)
        {
            var usuario = (LoginCLS)Session["User"];//de aca se saca id de usuario
            if (tarea =="Limipieza") {
                using (var contexto = new WarrenHills01Entities())
                {
                    var resultado = (from x in contexto.Dashboard
                                     where x.IdUsuario == usuario.IdUsuario
                                     && x.IdTarea == 1
                                     select x).FirstOrDefault();

                    if (resultado != null)
                    {
                        resultado.DiaSemana = dia;
                        contexto.SaveChanges();
                        return Json("Exitosa", JsonRequestBehavior.AllowGet);

                    }
                }
                

                }
            if (tarea == "Sacar Basura")
            {
                using (var contexto = new WarrenHills01Entities())
                {
                    var resultado = (from x in contexto.Dashboard
                                     where x.IdUsuario == usuario.IdUsuario
                                     && x.IdTarea == 2
                                     select x).FirstOrDefault();
                    if (resultado != null)
                    {
                        resultado.DiaSemana = dia;
                        contexto.SaveChanges();
                        return Json("Exitosa", JsonRequestBehavior.AllowGet);
                    }
                }
                

            }
            
            

                return View("MisTareas");
        }

        //pruebaFinalizaTarea
        public ActionResult Realizartarea2()
        {
            return View("MisTareas");
        }
     }
}
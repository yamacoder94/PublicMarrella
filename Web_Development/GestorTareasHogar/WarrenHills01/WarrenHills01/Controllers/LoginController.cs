using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WarrenHills01.Entidades;

namespace WarrenHills01.Controllers
{
    public class LoginController : Controller
    {
        // GET: Login
        [HttpGet]
        public ActionResult Index()
        {
            return View("Login"); //regresa la pagina de login
        }

        [HttpPost]
        public ActionResult IniciarSesion(Usuario user)
        {
            LoginCLS cls = new LoginCLS();
            using (var contexto = new WarrenHills01Entities())
            {
                var resultado = (from x in contexto.Usuario
                                 where x.CorreoElectronico == user.CorreoElectronico
                                 && x.Clave == user.Clave
                                 select x).FirstOrDefault();

                if(resultado != null)
                {
                    cls.IdUsuario = resultado.IdUsuario;
                    cls.CorreoElectronico = resultado.CorreoElectronico;
                    cls.Rol = resultado.IdRol;
                    cls.Nombre = resultado.Nombre;
                    cls.Apellido = resultado.Apellido;
                    Session["User"] = cls; // se mete toda la info del login en este objeto 


                    return RedirectToAction("Index", "Home");
                }
                else
                {
                    //aca se podria colocar una tabla que se llame intentos por dia ?
                    // cada vez que entre aca que inserte un registro , y cuando supera los 3 registros 
                    //se bloquea al usuario 

                    if(Session["contador"] == null)
                    {
                        Session["contador"] = 1;
                    }
                    else
                    {
                        var contador = int.Parse(Session["contador"].ToString());
                        Session["contador"] = contador + 1;// la desventaja de hacerlo asi es que si se cambia de navegador 
                        //el usuario podria intentar de nuevo 
                    }

                    
                    Session["User"] = null;
                    //aca llena el mensaje si el login fallo
                    ViewBag.MensajeLogin = "Credenciales incorrectas";

                    if(int.Parse(Session["contador"].ToString()) <= 3)
                    {
                        return View("Login");
                    }
                    else
                    {
                        //aca se podria bloquear al usuario 
                        return RedirectToAction("Index", "Login");
                    }
                    
                }
                
            }

        }


        //nos lleva a la pagina que pregunta por codigo para registro
        [HttpGet]
        public ActionResult ClaveRegistro()
        {
                return View("ClaveRegistro"); //nos lleva a la pagina que pregunta por codigo para registro 
         }


        [HttpPost]
        public ActionResult VerificarCodigo(string codigo)
        {
            int url = int.Parse(ConfigurationManager.AppSettings["llaveRegistro"]);
            int num = int.Parse(codigo);


            if(url == num)
            {
                Session["contador1"] = null;
                //Session["CodigoVerificado"]= true;
                return View("RegistroUsuario");
            }
            else
            {
                //Session["CodigoVerificado"] = false;
                //aca se podria colocar una tabla que se llame intentos por dia ?
                // cada vez que entre aca que inserte un registro , y cuando supera los 3 registros 
                //se bloquea al usuario 

                if (Session["contador1"] == null)
                {
                    Session["contador1"] = 1;
                }
                else
                {
                    var contador = int.Parse(Session["contador1"].ToString());
                    Session["contador1"] = contador + 1;// la desventaja de hacerlo asi es que si se cambia de navegador 
                                                       //el usuario podria intentar de nuevo 
                }


                
                //aca llena el mensaje si el login fallo
                ViewBag.MensajeCodigo = "Codigo incorrecto";

                if (int.Parse(Session["contador1"].ToString()) <= 3)
                {
                    return View("ClaveRegistro");
                }
                else
                {
                    ViewBag.MensajeCodigo = "Codigo incorrecto";
                    //aca se podria bloquear al usuario 
                    return View("Index", "Login");
                }

            }

            

        }

        [HttpPost]
        public ActionResult RegistraUsuario(Usuario user)
        {
            //aca viene los llenados a la base de datos por separado en base a lo que nos trae user 

            using (var contexto = new WarrenHills01Entities())
            {
                contexto.InsertaUsuario(user.Nombre, user.Apellido, user.CorreoElectronico, user.Clave, 2);
                contexto.SaveChanges();
            }
            //sera necesario obterner el id , para ello se llamar a la base de datos con dos cosas 
            //nombre y correo asi aseguro que sea el indicado
            using (var contexto = new WarrenHills01Entities())
            {
                var ultimoID = (from x in contexto.Usuario
                                where x.Nombre == user.Nombre
                                && x.CorreoElectronico == user.CorreoElectronico
                                select x.IdUsuario).FirstOrDefault();

                user.IdUsuario = ultimoID;

            }
            // se mete toda la info del login en este objeto DE SESSION
            LoginCLS cls = new LoginCLS();
            cls.IdUsuario = user.IdUsuario;
            cls.CorreoElectronico = user.CorreoElectronico;
            cls.Rol = 2;
            cls.Nombre = user.Nombre;
            cls.Apellido = user.Apellido;
            Session["User"] = cls; 

            llenaComboYVB();
            return View("RegistraUsuarioTareas");

          }

        //registra limpieza
        [HttpPost]
        public ActionResult RegistraUsuarioTareas(Dashboard dash)
        {
            
            //tiene que traer la ultima insercion de IdUsuario 
            //aca viene los llenados a la base de datos por separado en base a lo que nos trae user 
            var usuario = (LoginCLS)Session["User"];
            //casteo la variable de sesion y asi puedo sacar el valor de id usuario que necesito

            using (var contexto = new WarrenHills01Entities())
            {
                contexto.InsertaDash(Convert.ToInt32(usuario.IdUsuario), 1, dash.DiaSemana);
                //contexto.InsertaDash(usuario.IdUsuario, dash[1].IdTarea, dash[1].DiaSemana);
                contexto.SaveChanges();
            }

            //Manda el combo con solo los dia para la basura
            llenaComboBasura();
            return View("RegistraUsuarioTareas2"); //nos lleva a la pagina de inicio una vez se registra al usuario 
        }

        //registra sacar basura
        [HttpPost]
        public ActionResult RegistraUsuarioTareas2(Dashboard dash)
        {

            //tiene que traer la ultima insercion de IdUsuario 
            //aca viene los llenados a la base de datos por separado en base a lo que nos trae user 
            var usuario = (LoginCLS)Session["User"];
            //casteo la variable de sesion y asi puedo sacar el valor de id usuario que necesito

            using (var contexto = new WarrenHills01Entities())
            {
                contexto.InsertaDash(Convert.ToInt32(usuario.IdUsuario), 2, dash.DiaSemana);
                
                contexto.SaveChanges();
            }
            //Una vez se completa de registrar tareas , nos lleva a la pagina de inicio
                return RedirectToAction("Index", "Home");
        }

        //LLena el combo de dias de limpieza 
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


        //LLena el combo de dias de Basura 
        public void llenaComboBasura()
        {
            var dias = ListaDiasBasura(); // se llama a un metodo que puede ser usado cuando se quiera
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

        //llena el drop de los dias 
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
    }
}
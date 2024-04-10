using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WarrenHills01.Entidades;

namespace WarrenHills01.Controllers
{
    public class UsuarioController : Controller
    {
        // GET: Usuario

        [HttpGet] //Nos lleva a perfil 
        public ActionResult MiPerfil()
        {
            if (Session["User"] == null)
            {
                return RedirectToAction("Index", "Login");
            }

            Session["TareaRealizada"] = null;
            var usuario = (LoginCLS)Session["User"];
            ViewBag.Message = usuario.Nombre + " " + usuario.Apellido;
            Usuario user = new Usuario();
            user = TraerInfoUsuario();

            ViewBag.usuario = usuario.Nombre;
            ViewBag.apellido = usuario.Apellido;
            ViewBag.correo = usuario.CorreoElectronico;

            return View("PerfilUsuario", user);
        }

        [HttpGet] //nos lleva a la pgina de RegistraUsuarioAdmin 
        public ActionResult RegistraUsuarioAdmin()
        {
            ViewBag.Message = "Registro de usuario";
            return View("RegistraUsuarioAdmin");
        }
        [HttpGet]
        public ActionResult SignOut()
        {
            Session["User"] = null;
            return RedirectToAction("Index", "Login");
        }

        public Usuario TraerInfoUsuario()
        {
            var usuario = (LoginCLS)Session["User"];
            using (var contexto = new WarrenHills01Entities())
            {
                var ListaTareas = (from x in contexto.Usuario
                                   where usuario.IdUsuario == x.IdUsuario
                                   select x)
                                   .FirstOrDefault();

                return ListaTareas;

            }
        }

        [HttpPost] //Nos lleva a perfil 
        public ActionResult ActulizaUsuario(Usuario user)
        {
            var usuario = (LoginCLS)Session["User"];
            using (var contexto = new WarrenHills01Entities())
            {
                var resultado = (from x in contexto.Usuario
                                 where x.IdUsuario == usuario.IdUsuario
                                 select x).FirstOrDefault();
                if (resultado != null)
                {
                    //Actualiza en base de datos
                    resultado.Nombre = user.Nombre;
                    resultado.Apellido = user.Apellido;
                    resultado.CorreoElectronico = user.CorreoElectronico;
                    resultado.Clave = user.Clave;
                    contexto.SaveChanges();

                    //toca actualizar la variable de sesion
                    usuario.Nombre = resultado.Nombre;
                    usuario.Apellido = resultado.Apellido;
                    usuario.CorreoElectronico = resultado.CorreoElectronico;
                    usuario.IdUsuario = usuario.IdUsuario;
                    usuario.Rol = usuario.Rol;
                    Session["User"] = usuario;



                    ViewBag.UsuarioActualizado = "Actulizado";
                }


            }
            
            return View("PerfilUsuario");
        }
    }
}
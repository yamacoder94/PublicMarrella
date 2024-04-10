using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Linq.Expressions;

namespace SistemaVenta.DAL.Repositorios.Contrato
{
    public interface IGenericRepository<TModel> where TModel : class
    {

        // todos los metodos que vana  trabajar con los modelos 
        //Modelos son cada una de las tablas

        //para obeter algun modelo , y toma un filtro en caso que necesitmos un id, nombre , etc
        Task<TModel> Obtener(Expression<Func<TModel,bool>> filtro);
        Task<TModel> Crear(TModel modelo);
        Task<bool> Editar(TModel modelo);

        Task<bool> Eliminar(TModel modelo);
        Task<IQueryable<TModel>> Consultar(Expression<Func<TModel,bool>> filtro=null);

    }
}

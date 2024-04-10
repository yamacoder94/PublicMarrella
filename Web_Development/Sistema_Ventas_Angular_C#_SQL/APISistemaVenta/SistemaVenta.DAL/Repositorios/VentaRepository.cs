using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SistemaVenta.DAL.DBContext;
using SistemaVenta.DAL.Repositorios.Contrato;
using SistemaVenta.Model;

namespace SistemaVenta.DAL.Repositorios
{
    public class VentaRepository : GenericRepository<Venta> , IVentaRepository
    {

        private readonly SistemaVentasContext _dbcontext;

        public VentaRepository(SistemaVentasContext dbcontext) : base(dbcontext) 
        {
            _dbcontext = dbcontext;
        }

        public async Task<Venta> Registrar(Venta modelo)
        {
            Venta ventaGenerada = new Venta();
            //si ocurre un error dentro de cada insert 
            using (var transaction = _dbcontext.Database.BeginTransaction())
            {
                //si dentro de la logica ocurre un error , tiene que restrablecer todo como al incio
                try
                {
                    //para poder interactuar con todos los productos
                    foreach(DetalleVenta dv in modelo.DetalleVenta){
                        Producto producto_encontrado = _dbcontext.Productos.Where(p => p.IdProducto == dv.IdProducto).First();

                        producto_encontrado.Stock = producto_encontrado.Stock -dv.Cantidad;
                        _dbcontext.Productos.Update(producto_encontrado);
                    }
                    await _dbcontext.SaveChangesAsync();

                    //ahora se genera un numero de documento
                    NumeroDocumento correlativo = _dbcontext.NumeroDocumentos.First();
                    correlativo.UltimoNumero = correlativo.UltimoNumero + 1;
                    correlativo.FechaRegistro = DateTime.Now;

                    _dbcontext.NumeroDocumentos.Update(correlativo);
                    await _dbcontext.SaveChangesAsync();

                    //Generar el formato de numero de documento de venta
                    int CantidadDigitos = 4;
                    string ceros = string.Concat(Enumerable.Repeat("0", CantidadDigitos));
                    string numeroVenta = ceros + correlativo.UltimoNumero.ToString();

                    //Si pasa los 4 ceros , eliminara uno y asi sucesivamente 
                    numeroVenta = numeroVenta.Substring(numeroVenta.Length - CantidadDigitos,CantidadDigitos);

                    //Actuliza el numero de documento
                    modelo.NumeroDocumento = numeroVenta;

                    await _dbcontext.Venta.AddAsync(modelo);
                    await _dbcontext.SaveChangesAsync();

                    ventaGenerada = modelo;

                    //si todo sale bien , la transaccion finaliza sin problemas
                    transaction.Commit();

                }
                catch{
                    transaction.Rollback();//si falla , ayuda a reestabler todo 
                    throw;

                }

                return ventaGenerada;

            }
        }
    }
}


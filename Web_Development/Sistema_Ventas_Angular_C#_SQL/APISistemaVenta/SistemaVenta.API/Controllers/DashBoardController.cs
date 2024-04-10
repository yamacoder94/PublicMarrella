using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SistemaVenta.BLL.Servicios.Contrato;
using SistemaVenta.DTO;


using SistemaVenta.API.Utilidad;


namespace SistemaVenta.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DashBoardController : ControllerBase
    {
        private readonly IDashBoardService _dashesService;

        public DashBoardController(IDashBoardService dashesService)
        {
            _dashesService = dashesService;
        }

        [HttpGet]
        [Route("Resumen")]
        public async Task<IActionResult> Resumen()
        {
            var rsp = new Response<DashboardDTO>();

            try
            {

                rsp.status = true;
                rsp.value = await _dashesService.Resumen();


            }
            catch (Exception ex)
            {
                rsp.status = false;
                rsp.msg = ex.Message;


            }
            return Ok(rsp);//respuesta exitosa


        }
    }
}

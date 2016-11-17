using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace FirstCore.Controllers
{
    [Produces("application/json")]
    [Route("api/StudentMasters")]
    public class StudentMastersController : Controller
    {

        [HttpGet]
        public IEnumerable<StudentMasters> Get()
        {
            return StudentMasters.studetndDetails().ToList();
        }
    }
}

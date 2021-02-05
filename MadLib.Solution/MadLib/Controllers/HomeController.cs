using Microsoft.AspNetCore.Mvc;

namespace MadLib.Controllers
{
    public class HomeController : Controller
    {
        [Route("/form")]
        public ActionResult Form(); { return View(); }
    }
}
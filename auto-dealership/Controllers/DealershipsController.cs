using Microsoft.AspNetCore.Mvc;
using Dealerships.Models;
using System.Collections.Generic;

namespace Dealerships.Controllers

{
    public class DealershipsController : Controller 
    {
       
        [HttpGet("/autos")]
        public ActionResult Index()
        {
					List<Car> allItems = Car.GetAll();
        	return View(allItems);
        }

				[HttpGet("/autos/new")]
				public ActionResult CreateForm()
				{
					return View();
				}

				[HttpPost("/autos")]
				public ActionResult Create(string makemodel, int price, int miles)
				{
					Car myCar = new Car(makemodel, price, miles);
					return RedirectToAction("Index");
				}
		}
}		

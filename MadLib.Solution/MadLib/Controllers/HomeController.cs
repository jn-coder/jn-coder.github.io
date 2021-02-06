using Microsoft.AspNetCore.Mvc;
using MadLib.Models;
namespace MadLib.Controllers
{
    public class HomeController : Controller
    {
    [Route("/form")]
    public ActionResult Form() { return View(); }

    [Route("/story")]
		public ActionResult Story(string person1, string person2, string animal, string exclamation, string verb, string noun)
		{
			StoryVariable myStoryVariable = new StoryVariable();
			myStoryVariable.Person1 = person1;
			myStoryVariable.Person2 = person2;
			myStoryVariable.Animal = animal;
			myStoryVariable.Exclamation = exclamation;
			myStoryVariable.Verb = verb;
			myStoryVariable.Noun = noun;
			return View(myStoryVariable);
		}
		[Route("/")]
		public ActionResult Index() { return View(); }	
  	}
  }
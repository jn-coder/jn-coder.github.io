using System;
using System.Collections.Generic;
using ToDoList.Models;

namespace ToDoList
{
  public class Program
  {
    public static void Main() {
        Console.WriteLine("Welcome to the To Do List");
        Console.WriteLine("Would you like to Add to or View your list? (Add/View)");
        string action = Console.ReadLine();
        if (action == "Add")
        {
            Console.WriteLine("Please enter the description for the new item");
            string desc = Console.ReadLine();
        }
    }
  }
}  
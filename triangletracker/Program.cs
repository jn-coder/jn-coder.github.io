using System;

public class Triangle {
    public int firstSide;
    public int secondSide;
    public int thirdSide;
    public string IsTriangle (int firstSide, int secondSide, int thirdSide) {

    if (firstSide > (secondSide + thirdSide) || secondSide > (firstSide + thirdSide) || thirdSide > (firstSide + secondSide))
    {
      return "not a";
    }
    else if ((firstSide == secondSide) && (firstSide == thirdSide))
    {
      return "a equilateral";
    }
    else if ((firstSide == secondSide) || (secondSide == thirdSide) || (thirdSide == firstSide))
    {
      return "a isosceles";
    }
    else
    {
      return "a scalene";
    }
  }
}

class FrontEnd {
  public static void Main () {
    Console.WriteLine("Find out what type of triangle you have. Enter the 1st side of your triangle");
    int firstSide = int.Parse(Console.ReadLine());
    Console.WriteLine("Enter the 2nd side of your triangle");
    int secondSide = int.Parse(Console.ReadLine());
    Console.WriteLine("Enter the 3rd side of your triangle");
    int thirdSide = int.Parse(Console.ReadLine());
    Triangle checkTriangle = new Triangle ();

    Console.WriteLine ("This is " + checkTriangle.IsTriangle(firstSide, secondSide, thirdSide) + " triangle!");

  }
}

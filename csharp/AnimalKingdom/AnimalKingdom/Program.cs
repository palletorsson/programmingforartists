using System;

namespace AnimalKingdom
{
    class Program
    {
        static void Main(string[] args)
        {

            var cat1 = new Animals.Cat("Gurka", "Pink");
            var selma = new Animals.Dog("Selma", "Black");
            cat1.Move(1, 2);
            selma.Move(3, 2); 

            Console.WriteLine(cat1.X);
            Console.WriteLine(cat1.Y);
            Console.WriteLine(cat1.X); 
            Console.WriteLine(cat1.talk());
            Console.WriteLine(selma.talk());
        }
    }
}

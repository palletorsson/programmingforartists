using System;

namespace AnimalKingdom.Animals
{
    public class Cat : Animal
    {
        public Cat(string name, string color) : base(name, color)
        {
        }
        public override string talk()
        {
            return "Maju";
        }
    }
}

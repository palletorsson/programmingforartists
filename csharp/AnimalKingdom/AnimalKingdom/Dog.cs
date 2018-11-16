using System;

namespace AnimalKingdom.Animals
{
    public class Dog : Animal
    {
        public Dog(string name, string color) : base(name, color)
        {
        }
        public override string talk()
        {
            return "Voff";
        }
    }
}

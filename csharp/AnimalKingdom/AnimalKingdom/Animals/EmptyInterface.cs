using System;
namespace AnimalKingdom.Animals
{
    public interface IAnimalActions
    {
        void Talk(string b);
        void Move(int x, int y);
        int XCord { get; }
        int YCord { get; }
    }
}

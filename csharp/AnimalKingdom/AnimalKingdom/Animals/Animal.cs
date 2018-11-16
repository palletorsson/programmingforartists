using System;
namespace AnimalKingdom.Animals
{
    public class Animal
    {

        public string Name { get; set; }

        public string Color { get; set; }

        public int X { get { return _X; } }
        public int Y { get { return _Y; } }

        private int _Y { get; set; }
        private int _X { get; set; }

        public bool IsHungery { get; set; }

        public bool IsAngry { get; set; }


        public Animal (string name, string color) 
		{
			Name = name;
            Color = color;
        }
            
        public void Move (int x, int y) {

            // kolla smarta grejor
            _X = x;
            _Y = y;
        } 

        public virtual string talk() {
			return " Blipp Blopp "; 
		}
	}
}

int[] listOfData = { 
  30, 75, 53, 79, 40, 50, 44, 34, 44, 69
};

void setup() {
   size(500,500); 
   fill(0);
   listOfData[3] = 100; // ändra värdet på ett element
   print(listOfData[4]); // läs enskilt värde. 
}

void draw() {
  // Läs ett listelement varje gång genom loopen 
  // skriv ut en rektangel i varje loop
  for (int i = 0; i < listOfData.length; i++) {
    rect(i*50+5, height, 40, -listOfData[i]*4);
    println(listOfData[i]);
  }

  // loopen körs bara en gång
  noLoop(); 
}

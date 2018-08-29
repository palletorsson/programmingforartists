int[] listOfData = { 
  30, 75, 53, 79, 40, 50, 44, 34, 44, 69
};

void setup() {
   size(500,500); 
   fill(0);
   listOfData[3] = 100; // ändra värdet på ett element
   print(listOfData[4]); // läs enskilt värde. 
   fill(0, 102, 153);
   text("A list of values", 5, 20); 
}

void draw() {
  // Läs ett listelement varje gång genom loopen 
  // skriv ut en rektangel i varje loop
  for (int i = 0; i < listOfData.length; i++) {
    fill(0, 102, 153);
    rect(i*50+5, height, 40, -listOfData[i]*4);
    fill(255, 102, 153);
    text(listOfData[i], i*50+15, height-20); 
    println(listOfData[i]);
  }

  // loopen körs bara en gång
  noLoop(); 
}

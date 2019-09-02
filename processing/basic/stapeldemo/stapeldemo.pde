int[] listOfData = { 20, 75, 52, 79, 40, 50, 44, 34, 69, 73, 83, 29 };
int dataLen = listOfData.length; 
String[] fruits = { "äpple", "päron" };

// once
void setup() {
  size(600, 600); 
  textSize(23); 
  println(dataLen);
}

// loop
void draw() { 
  background(255); 
  fruits[0] = "orange"; 
  println(fruits[0]); 
  listOfData[5] = floor(random(230)); 
  print(listOfData[5]); 
  listOfData[3] = 120; 
  text(listOfData[5], 300, 300);  

  for (int i = 0; i < dataLen; i = i + 1) {
    rect(((30 * 1) + 30), (30 + 1 * i)+30, listOfData[i], 10);
  }

  // noLoop();
} // end of draw 

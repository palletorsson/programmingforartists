String resistorColors[] = { "black", "brown", "red", 
                "orange", "yellow", "green", 
                "blue", "violet", "grey", 
                "white"};

color colors[] = {  color(0), color(165,42,42), 
                    color(255,0,0), color(255,127,80), 
                    color(255, 255, 0), color(0, 255, 0),
                    color(0, 0, 255), color(148,0,211), 
                    color(100, 100, 100), color(230)
                  };


// String myResistor[] = {"brown", "black", "black"};  // 10k
// String myResistor[] = {"brown", "black", "red"};  // 1 k
//String myResistor[] = {"yellow", "violet", "red"};  // 47 k
String myResistor[] = {"red", "red", "brown"}; // 220 

int numList[] = { 0, 0, 0 };

float arduinoVolt = 5; 
float voltDrop = 1.8; 
float targetAmp = 0.020; 

void setup() {
  size(380,400);
  textAlign(CENTER);
  textSize(16);   
  fill(0); 
}

void draw() {
 text("Arduino voltage: " + arduinoVolt + "V" , width/2,20);  
 text("Led voltage drop: " + voltDrop + "V" , width/2, 50);  
 float allVolt = arduinoVolt - voltDrop;
 text("Voltage over led: " + allVolt + "V" , width/2, 80);  
 line(20, 170, width-20, 170);
 fill(255, 255, 230); 
 rect(60, 100, width-120, 120);
 //noStroke();
 
 for (int i= 0; i < myResistor.length; i++) {
      for (int j= 0; j < resistorColors.length; j++) {
          if(myResistor[i] == resistorColors[j]) {
              println(myResistor[i], j); 
              numList[i] = j; 
              fill(colors[j]); 
              rect((i*60)+100, 100, 50, 120); 
          }
      }
  }
  
  String base = "" + numList[0] + numList[1];

  println(base); 
  println(numList[2]); 
  int powv = numList[2];
  for (int j = 0; j < powv; j++) {
    base = base + "0";
  }

 
  println(base); 
  float kohms = Float.valueOf(base);
  float ohms = Float.valueOf(base);
  kohms = kohms / 1000;
  
  text(base + " ohm ", (width/2), 250); 
  text(kohms + " k ohm ", (width/2), 280); 
  float disCurrent = allVolt / targetAmp;
  text("Best match: " + disCurrent + " ohm ", (width/2), 350); 
  noLoop();
}

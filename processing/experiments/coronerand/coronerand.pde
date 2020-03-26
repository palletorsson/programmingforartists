
String[] alltext;

String[] alltext_d;
String longstring = "";
String longstring_d = "";
char[] strain = new char[20];
char[] strain_d = new char[20];
int index = 20; 

void setup(){
  
  fullScreen(); 
  frameRate(12); 
  alltext = loadStrings("c.txt");
  alltext_d = loadStrings("d.txt");
  String temptext = alltext[0];
  for (int l = 0 ; l < 20; l++) {
    strain[l] = temptext.charAt(l); 
  } 
   for (int l = 0 ; l < 20; l++) {
    strain_d[l] = temptext.charAt(l); 
  } 
  
  for (int i = 0 ; i < alltext.length; i++) {
    longstring = longstring + alltext[i];
  }
    
  for (int m = 0; m < alltext_d.length; m++) {
    longstring_d = longstring_d + alltext_d[m];
  }


  
  textSize(14);
}

void draw(){
  background(0);
  if(index > alltext.length -1 ) {
    index = 20; 
  }
  for (int j = 0; j < 19; j++) {
   strain[j] = longstring.charAt(index+j);  
  }
  for (int j = 0; j < 19; j++) {
   strain_d[j] = longstring_d.charAt(index+j);  
  }
  index=index +1; 
  for (int k = 0; k < 20; k++) {

    if (strain[k] == 'A') {
      fill(0,0,255);
    }
    if (strain[k] == 'T') {
      fill(0,255,255);
    }
    if (strain[k] == 'C') {
      fill(255,0,0);
    }
    
    if (strain[k] == 'G') {
      fill(255,255,0);
    }
    rect(0, 40 + (k * 80), width, 64);
  }
    for (int k = 0; k < 20; k++) {

    if (strain_d[k] == 'A') {
      fill(0,0,255);
    }
    if (strain_d[k] == 'T') {
      fill(0,255,255);
    }
    if (strain_d[k] == 'C') {
      fill(255,0,0);
    }
    
    if (strain_d[k] == 'G') {
      fill(255,255,0);
    }
    rect(0+width/2, 40 + (k * 80), width/2, 64);
  }
  
}

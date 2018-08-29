
StringList listOfPersons;
StringList finalList;

String currentOne = "";
String currentTwo = "";
int count = 1; 
String[] dListOfPersons = {
  "palle", "maja", "sara", "feliz", "katten", "hunden", "foo", "bar"
}; 

void setup() {
  size(600, 400);
  listOfPersons = new StringList();
  finalList = new StringList();
  for (int i=0; i < dListOfPersons.length; i++ ) {
    listOfPersons.append(dListOfPersons[i]);
  }
  frameRate(1);
  textSize(20);
}

void draw() {
  if (listOfPersons.size() > 0) {
    background(125);
    int index = int(random(listOfPersons.size()));
    currentOne = listOfPersons.get(index); 
    listOfPersons.remove(index);
    int index2 = int(random(listOfPersons.size()));
    currentTwo = listOfPersons.get(index2); 
    listOfPersons.remove(index2);
    finalList.append("Par " + count + ": " + currentOne + " - " + currentTwo);
    for (int j=0; j < finalList.size(); j++) {
      text(finalList.get(j), 150, 150+(j*30));
    }
    count++;
  } else {
    for (int j=0; j < finalList.size(); j++) {
      println(finalList.get(j));
    }
    noLoop();
  }
}

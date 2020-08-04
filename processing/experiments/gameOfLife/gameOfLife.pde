// game of life programming for artist 

// skala ytan
int rectSize = 32; 

int columns = 800/rectSize; 
int rows = 600/rectSize; 


int[][] board = new int[columns][rows];

void setup() {
  size(800, 600);

  for (int i=0; i < columns-1; i++) {
    for (int j=0; j < rows-1; j++) {

      if (random(1) < 0.1) {
        board[i][j] = 1;
      } else {
        board[i][j] = 0;
      }
    }
  }
  
}
void draw() {
  println(rows);

  // ändra antal frames med musen
  if (mouseX > 60) {
    frameRate(mouseX/40);
  } else {
    frameRate(1);
  }

  for (int i=0; i < columns; i++) {
    for (int j=0; j < rows; j++) {   
      if (board[i][j] == 1) {
        fill(0, 255, 0);
      } else {
        fill(255, 0, 255);
      }
      rect(i*rectSize, j*rectSize, rectSize*rectSize, rectSize*rectSize);
    }
  }
  for (int i=0; i < columns-1; i++) {
    for (int j=0; j < rows-1; j++) {      
      // kolla pixel 
      // sätt nytt värde 
      int newValue = checkPixelState(i, j);
      board[i][j] = newValue;
    }
  }

  
}

int checkPixelState(int x, int y) {
  // Som grannar räknas direkt intill-liggande 
  // rutor horisontellt, lodrätt eller diagonalt.
  int my = board[x][y];
  int sum = 0;
  
  // kanter högst upp och till vänster
  if (y == 0 || y == rows) {
     // println("rows" , x, y, rows, columns); 
         
  } else {
    for (int i = -1; i <= 1; i++) {
      for (int j = -1; j <= 1; j++) {
        sum += board[(x+i+columns)%columns][(y+j+rows)%rows];
      }
    }
  }

  sum -= board[x][y];
  // En cell dör om den har färre än två grannar (isolering) 
  // eller om den har fler än tre grannar (trängsel).



  if (my == 1 && (sum < 2 )) {
    return 0;
  } 

  if (my == 1 && (sum > 3)) {
    return 0;
  } 

  // En cell föds om den har exakt tre grannar. 
  if (my == 0 && sum == 3) {
    return 1;
  } 
  return board[x][y];
}

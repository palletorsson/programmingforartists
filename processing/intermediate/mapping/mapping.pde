

// The MIT License (MIT) - See Licence.txt for details

// Copyright (c) 2013 Mick Grierson, Matthew Yee-King, Marco Gillies


import processing.sound.*;
SoundFile sample;

void setup()
{
  size(640, 960);
  sample = new SoundFile(this, "atoms.wav");
  background(0);
  rectMode(CENTER);
   sample.loop();
}

void draw()
{
//  
}

void mouseDragged()
{
 
  float red = map(mouseX, 0, width, 0, 255);
  float blue = map(mouseY, 0, width, 0, 255);
  float green = dist(mouseX,mouseY,width/2,height/2);
  
  float speed = dist(pmouseX, pmouseY, mouseX, mouseY);
  float alpha = map(speed, 0, 20, 0, 10);
  //println(alpha);
  float lineWidth = map(speed, 0, 10, 10, 1);
  lineWidth = constrain(lineWidth, 0, 10);
  
  noStroke();
  fill(0, alpha);
  rect(width/2, height/2, width, height);
  
  stroke(red, green, blue, 255);
  strokeWeight(lineWidth);
  
  line(pmouseX, pmouseY,mouseX, mouseY);
  mirrorbrush(pmouseX, pmouseY,mouseX, mouseY,lineWidth);
  println((float) mouseX/width);
  println((float) mouseY/height);
  sample.rate((float) mouseY/width);
  sample.amp(((float) mouseX/height)-1);
}

void mirrorbrush(float x,float y, float px, float py, float lineWidth) {
  strokeWeight(lineWidth);
  line(px,py,x,y);
  line(width/2+((width/2)-px),py,width/2+((width/2)-x),y);
  return;
}

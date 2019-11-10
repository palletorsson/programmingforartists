var W = 750; // eget värde
var colort = 600;
var imgName = "./data/svstrum.jpg";
function setup() {
    createCanvas(750, 732);
    img = loadImage(imgName);

    console.log(img.height);
}

function draw() {
image(img, 10, 10);
  img.loadPixels();

  for (var i = 0; i < img.height-1; i++) {
      for (var j = 0; j < img.width-1; j++) {

        rand = floor(random(100));
        if (rand < 1) {
          var thispixelindex = (i*j)+j;
          var pos = (i+j*width);
          //console.log("------------", thispixelindex);
          var c = img.pixels[pos-W];
          var r = red(img.pixels[pos]);
          var g = green(img.pixels[pos]);
          var b = blue(img.pixels[pos]);
          var cl = floor(r+g+b);

          // skapar den rinnande effekten
          if (cl < colort) {
            img.pixels[pos] = c;
            img.pixels[pos+1] = c;
            img.pixels[pos-1] = c;
          }
      }
    }
  }
img.updatePixels();
}

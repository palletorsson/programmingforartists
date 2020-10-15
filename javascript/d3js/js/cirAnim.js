var CSS_COLORS = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];

// skapa en svg-element
var mySvg = d3.select(".rectVis")
    .append("svg")
    .attr("height", "1000px")
    .attr("width", "100%")

// skapa en random array med 1000 element
// av data mellan 10 - 60

function getData() {
  var myData = [];
  for (var i = 0;  i < 100; i++) {
    myData[i] = Math.floor(Math.random() * 50)+10;
  }
  return myData; 
}

function showData(dur) {
  var theData = getData(); 
  mySvg.selectAll("circle")
    .data(theData)
    .enter().append("circle")
    .attr("fill", function(d, i) { var c = Math.floor(Math.random() * CSS_COLORS.length); return CSS_COLORS[c]; })
    .attr("stroke", "black")
    .attr("opacity", "0.5")
    .attr("cx", "0")
    .attr("cy", "0")
    .attr("r", "0")
    .transition()
    .duration(dur)
    .text(CSS_COLORS[Math.floor(Math.random() * CSS_COLORS.length)])
    .attr("cx", function(d, i) { return i * 10 + 100; })
    .attr("cy", function(d, i) { return d + d * 2 + 100; })
    .attr("r", function(d, i) { return d; })
}

showData(5000);

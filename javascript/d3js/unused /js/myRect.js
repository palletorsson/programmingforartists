var myData = [30, 75, 53, 79, 40, 50, 44, 34, 44, 69];
var myData2 = [];
var CSS_COLORS = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];

// cx cy r
var mySvg = d3.select(".rectVis")
    .append("svg")
    .attr("height", "1000px")
    .attr("width", "100%")

  for (var i = 0;  i < 2000; i++) {
    myData2[i] = Math.floor(Math.random() * 50)+10;
    console.log(myData2[i])
  }

  var theData = myData2;
  play(theData);

function play(theData) {
  mySvg.selectAll("circle")
    .data(theData)
    .enter().append("circle")
    .attr("fill", function(d, i) { var c = Math.floor(Math.random() * CSS_COLORS.length); return CSS_COLORS[c]; })
    .attr("stroke", "black")
    .attr("opacity", "0.5")
    .attr("cx", "500")
    .attr("cy", "100")
    .attr("r", "-400")
    .transition()
    .duration(1000)
    .text(CSS_COLORS[Math.floor(Math.random() * CSS_COLORS.length)])
    .attr("cx", function(d, i) { return d*16; })
    .attr("cy", function(d, i) { return d*i*.007 + 100; })
    .attr("r", function(d, i) { return d; })
}

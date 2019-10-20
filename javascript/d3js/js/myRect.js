var myData = [30, 75, 53, 79, 40, 50, 44, 34, 44, 69];
var myData2 = [];
// cx cy r
var mySvg = d3.select(".rectVis")
    .append("svg")
    .attr("height", "1000px")
    .attr("width", "100%")

setInterval(function() {

  for (var i = 0;  i < 30; i++) {
    myData2[i] = Math.floor(Math.random() * 50)+10;
    console.log(myData2[i])
  }
  var theData = myData2;
  play(theData);

}, 500);

function play(theData) {
  console.log(theData)
  mySvg.selectAll("rect")
    .data(theData)
    .enter().append("rect")
    .attr("fill", "pink")
    .attr("stroke", "black")
    .attr("height", function(d, i) { return d*10; })
    .attr("width", "50")
    .attr("x", function(d, i) { return 60*i; })
    .attr("y", function(d, i) { return 1000-(d*10); })
}


var showAnim = 5; 


if (showAnim == 2) {
d3.selectAll("svg")
  .remove()

d3.selectAll("p")
  .data([2, 4, 8, 16, 32, 64])
  	.text(function(d) { return d; })
    .style("font-size", function(d) { return d + "px"; });
}

if (showAnim == 3) {
d3.selectAll("p")
  .remove()

d3.selectAll("svg")
  .remove()

d3.select("#vis")
  .style("text-align", "center")
  .data([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811, 514229, 832040, 1346269, 2178309, 3524578, 5702887, 9227465, 14930352, 24157817, 39088169])
  .enter().append("span")
    .text(function(d) { return d + " "; })
    .style("font-size", function(d) { return d + "px"; });
}


if (showAnim == 4) {
d3.selectAll("circle")
	.data([40, 100])

	.transition()
    .duration(750)

    .delay(function(d, i) { return i * 10; })
    .attr("r", function(d) { return d/2; })
    .attr("cx", function() { return 150; });
}

if (showAnim == 5) {
  d3.selectAll("p")
    .remove()

  d3.selectAll("svg")
    .remove()

  var data = [60, 30, 80, 50, 10, 20];
  var bodySelection = d3.select("body");

  var svgContainer = bodySelection.append("svg")
      .attr("width", 1200)
      .attr("height", 400);

  svgContainer.style("top", 100)
              .style("left", 400) 
              .style("position", "absolute"); 


var circles = svgContainer.selectAll("circle")
                          .data(data)
                          .enter()
                          .append("circle")
                         

circles
   .transition()
   .duration(2000)
   .delay(function(d, i) { return i * 10; })
   .attr("cx", function(d, i) { return i*(d*2)+120; })
   .attr("cy", function(d) { return 140; })
   .attr("r", function (d) { return d; })
   .style("fill", function (d) { return "#"+d+""+d/2+""+d; })
   .style("stroke", "white")


var texts = svgContainer.selectAll("text")
                         .data(data)
                         .enter()
                         .append("text")

texts
   .transition()
   .duration(3000)
   .delay(function(d, i) { return i * 10; })
   .attr("x", function(d, i) { return i*d*2+100; })
   .attr("y", function(d) { return 20; })
   .text(function(d) { return d + " "; })
   .style("fill", "green")
   .style("stroke", "black");

var label = bodySelection.selectAll("svg")
            .data(["My data"])
            .enter().append("span")
            .text("cracy")
   
label
   .transition()
   .duration(3000)
   .delay(function() { return i * 10; })
   .attr("x", function() { return 100; })
   .attr("y", function() { return 300; })
   .text(function() { return "cracy data"; })
   .style("fill", "green")
   .style("stroke", "black");  


}
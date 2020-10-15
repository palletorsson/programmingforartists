



// skapa en referens till body-element
var bodySelection = d3.select("body");

// skapa ett en svg container 
var svgContainer = bodySelection.append("svg")
   .attr("width", 1200)
   .attr("height", 400)
   .style("top", 100)
   .style("left", 400)
   .style("position", "absolute");

var dataElements = [60, 30, 80, 50, 10, 20];

// skapa ett cirkel element för varje data element
var circles = svgContainer
   .selectAll("circle")
   .data(dataElements)
   .enter()
   .append("circle")

// animera cirklarna
circles
   .transition()
   .duration(2000)
   .delay(function(d, i) { return i * 10; })
   .attr("cx", function(d, i) { return i*(d*2)+120; })
   .attr("cy", function(d) { return 140; })
   .attr("r", function (d) { return d; })
   .style("fill", function (d) { return "#"+d+""+d/2+""+d; })
   .style("stroke", "white")

// skapa ett text element for alla dataElement
var texts = svgContainer
   .selectAll("text")
   .data(data)
   .enter()
   .append("text")

// animera texten    
texts
   .transition()
   .duration(1000)
   .delay(function(d, i) { return i * 10; })
   .attr("x", function(d, i) { return i*d*2+100; })
   .attr("y", function(d) { return 20; })
   .text(function(d) { return d + " "; })
   .style("fill", "green")
   .style("stroke", "black");

// lägg till en text element
var label =  d3.select("#vis")
      .text("Rectangle of Love")
      .style("text-align", "center")
      .style("line-height", "100px")
      .style("font-size", "24px")
      .style("transform", "rotate(-180deg) scale(0.001, 0.001)") //del 2
      .transition() // del 3
      .duration(2000) // del 4
      .style("transform", null);

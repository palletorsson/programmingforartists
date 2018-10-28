

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


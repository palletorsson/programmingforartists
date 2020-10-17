var data = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377]; 

var width = 800,
    height = 250,
    radius = Math.min(width, height) / 2;

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");


    d3.selectAll("p")
        .remove();
    d3.selectAll("svg")
        .remove();  
    d3.select("#vis")
    .style("text-align", "center")
    .data(data)
    .enter().append("span")
    .text(function(d) { return d + " "; })
    .style("font-size", function(d) { return d + "px"; });

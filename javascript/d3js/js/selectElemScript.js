
  d3.selectAll("p")
    .data([8, 16, 32, 16, 8, 56])
    .text(function(d) { return d; })
    .style("font-size", function(d) { return d*2 + "px"; });


if (showAnim == 2) {
  d3.selectAll("p")
    .remove();
    d3.selectAll("svg")
    .remove();  
  d3.select("#vis")
    .style("text-align", "center")
    .data([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811, 514229, 832040, 1346269, 2178309, 3524578, 5702887, 9227465, 14930352, 24157817, 39088169])
    .enter().append("span")
    .text(function(d) { return d + " "; })
    .style("font-size", function(d) { return d + "px"; });
}

if (showAnim == 3) {
  d3.selectAll("p")
    .remove();

  d3.selectAll("circle")
    .data([40, 100])
    .transition()
    .duration(750)
    .delay(function(d, i) { return i * 10; })
    .attr("r", function(d) { return d/2; })
    .attr("cx", function() { return 150; });
}
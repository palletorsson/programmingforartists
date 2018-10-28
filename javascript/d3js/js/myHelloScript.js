d3.select("#vis")
    .text("T-shirt text") // del 1
    .style("text-align", "center")
    .style("line-height", "320px")
    .style("font-size", "100px")
    .style("transform", "rotate(-180deg) scale(0.001, 0.001)") //del 2
    .transition() // del 3
    .duration(2000) // del 4
    .style("transform", null);

/*  */
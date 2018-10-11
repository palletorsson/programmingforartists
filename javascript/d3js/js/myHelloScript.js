d3.select("body").append("h1")
    .text("Hello, world!")
    .style("text-align", "center")
    .style("line-height", "320px")
    .style("font-size", "100px")
    .style("transform", "rotate(-180deg) scale(0.001, 0.001)")
  .transition()
    .duration(4000)
    .style("transform", null);
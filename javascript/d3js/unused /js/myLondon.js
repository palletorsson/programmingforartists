

var call = "https://opendata-download-metobs.smhi.se/api/version/1.0/parameter/22/station/98210/period/latest-months/data.json"

d3.json(call).then(function(d) {
  console.log(d);
  console.log(d.value);

  var mySvgContainer = d3.select("body").append("svg");

  mySvgContainer.attr("height", "1000px")
       .attr("width", "100%");

  mySvgContainer.selectAll("rect")
      .data(d.value)
      .enter().append("rect")
      .attr("height", function(d) { return d.value * 10; })
      .attr("width", "30px")
      .attr("fill", "pink")
      .attr("stroke", "black")
      .attr("x", function(d, i) { return (i * 30)+100; })
      .attr("y", function(d) { return 400 - d.value * 10 ; });

}); // json import

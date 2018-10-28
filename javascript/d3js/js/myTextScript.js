var textString = " .. ... .... Level of thinking that occurs is influenced by the level of questions asked"; 
var index = 0; 
var splitText = textString.split(" "); 
var len = splitText.length-1; 
var showAnim = 1; 

function showText() {
d3.selectAll("svg")
  .remove()

d3.selectAll("p")
  .remove()

d3.select("#vis")
    .text(splitText[index])
    .style("text-align", "center")
    .style("line-height", "320px")
    .style("font-size", "100px")
    .style("transform", "rotate(-180deg) scale(0.001, 0.001)")
    .transition()
    .duration(2000)
    .style("transform", null);

  index = index + 1; 
  if (index > len)	 {
  	clearTimeout(loop);
  }
}

if (showAnim == 1) {
	var loop = setInterval(function() {
		showText(); 
	}, 700); 
}

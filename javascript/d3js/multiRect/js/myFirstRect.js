var mySvg = d3.select("body")
    .append("svg")

var showElements = function() {
  var myData = [];
  var showAnim = 0;
  var r = 0;
  var vects = [];
  var index = 0;
  var index2 = 0;
  for (var i = 0; i < 16; i++ ) {
    for (var j = 0; j < 16; j++ ) {
      therand = Math.floor(Math.random() * 100);
      myData[index2] = therand;
      index2++;
    }
  }

  for (var i = 0; i < 16; i++ ) {
    for (var j = 0; j < 16; j++ ) {
      vects[index] = {i,j}
      index++;
    }
  }
  mySvg.attr("height", "1000px")
  .attr("width", "100%")
  .selectAll("rect")
    .data(myData)
    .enter().append("rect")
   
    .attr("fill", "pink")
    .attr("stroke", "black")
    .attr("height", function(d, i) { return d+"px"; })
    .attr("width", function(d, i) { return d+"px"; })
    .attr("x", function(d, i) {
      var diff = ((myData[i]/2)-100)*-1;
      var thex = vects[i].i*100+diff-50;
      return thex+"px";
    })
    .attr("y", function(d, i) {
      var diff = ((myData[i]/2)-100)*-1;
      var they = vects[i].j*100+diff-50;
      console.log(they, vects[i].j*100, diff)
      return they+"px";
    })
    .on("mouseover", function (d, i) {
      d3.select(this)
          .transition()
           .duration('50')
           .attr('width', function() {
            return 10+"px"; 
          })
          .attr('height', function() {
            return 10+"px"; 
          })
    })
    .on('mouseout', function (d, i) {
      d3.select(this)
           .transition()
           .duration('1000')
           .attr('width', function() {
            return 100+"px"; 
          })
          .attr('height', function() {
            return 100+"px"; 
          })
          })
    .on('click', function (d, i) {
      d3.select(this)
      .transition()
      .duration('100')
      .attr('opacity', "0.1")
     }) 
};
showElements(); 
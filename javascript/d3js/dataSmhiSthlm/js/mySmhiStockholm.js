

var call = "https://opendata-download-metobs.smhi.se/api/version/1.0/parameter/22/station/98210/period/latest-months/data.json"
var height = 300; 
var width = 200; 
d3.json(call).then(function(d) {

  // 1 parseData -
  console.log("all data: ", d);
  console.log(d.value[0].value);
  var data = d.value;
  console.log("my selectd data: ", data);  
  var temps = []; 
  var days = []; 
 
  for (var i = 0; i < data.length; i++) {
   
   temps[i] = data[i].value; 
   days[i] = data[i].ref; 
  } 

  var myData = {
     temps: temps, 
     days: days
  }
  console.log(myData); 

  // skapa staplar
  var mySvgContainer = d3.select("body").append("svg");

     mySvgContainer.attr("height", "1000px")
          .attr("width", "100%");

     mySvgContainer.selectAll("rect")
          .data(myData.temps)
          .enter().append("rect")
          .attr("height", function(d) { return d * 10; })
          .attr("width", "30px")
          .attr("fill", "pink")
          .attr("stroke", "black")
          .attr("x", function(d, i) { return (i * 40)+100; })
          .attr("y", function(d) { return 400 - d * 10 ; });

 // skapa text
 var tempText = mySvgContainer.selectAll("text")
      .data(myData.temps)
      .enter()
      .append("text");

     tempText
      .attr("x", function(d, i) { return (i * 42)+100; })
      .attr("y", function(d) { return 400 - d * 12 ; })
      .text( function (d) {  return  d ; })
        .attr("font-family", "sans-serif")
        .attr("font-size", "16px")
        .attr("fill", "red");

// skapa diagram
var yMax = d3.max(myData.temps);

var y = d3.scaleLinear()
     .domain([0, yMax+2])
     .range([height, 0]);

var yAxis = d3.axisLeft(y)
     .ticks(10)
     .tickPadding(16)
     .tickSize(16);

var x = d3.scaleTime()
     .domain(0, 100)
     .range([0, width]);

var xAxis = d3.axisBottom(x).ticks(10)
     .tickPadding(16)
     .tickSize(16);

var chartYleft = mySvgContainer.append("g")
     .attr("transform","translate("+90+","+100+")");


var chartYright = mySvgContainer.append("g")
     .attr("transform","translate("+90+","+100+")");

chartYleft.append("g")
      .attr("class","axis y")
      .call(yAxis);
   
chartYright.append("g")
      .attr("class","axis x")
      .attr("transform","translate(0,"+height+")")
      .call(xAxis);

      console.log(myData.days); 

  var refText = chartYright.selectAll("text")
        .data(myData.days)
        .enter()
        .insert("text");
  
       refText
        .attr("x", function(d, i) { return 100; })
        .attr("y", function(d) { return height+100 ; })
      
 
        .text( function (d) { 
             console.log(d); 
             return  d ; 
          })
          .attr("font-family", "sans-serif")
          .attr("font-size", "12px")
          .attr("fill", "black")
         
          .attr("transform", function(d,i) { 
               return "translate("+( 420 + (i * 40)) +","+ 210  +") rotate(90)"; 
          }); 
}); // json import

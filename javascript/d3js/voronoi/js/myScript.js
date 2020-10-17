var width = window.innerWidth;
var height = window.innerHeight;

var vertices = d3.range(50).map(function(d){ return [Math.random()*width,Math.random()*height]; });

var voronoi = d3.voronoi().size([width,height]);
var svg = d3.select("body").append("svg").attr("width",width+"px").attr("height",height+"px");

svg.append("g").attr("class","polygons")
    .selectAll("path")
    .data(voronoi.polygons(vertices))
    .enter().append("path")
        .attr("d", function(d){ 
            var thepath = "M"+d.join("L")+"Z"; 
            console.log(thepath); 
            return thepath; 
        });

svg.append("g").attr("class","fuel")
    .selectAll("circle")
    .data(vertices)
    .enter().append("circle")
        .attr("cx",function(d){ return d[0]; })
        .attr("cy",function(d){ return d[1]; })
        .attr("r","10");

var updatedata = function() {
    for (var i = 0; i < vertices.length; i++) {
        var x = vertices[i][0]; 
        var y = vertices[i][1]; 
        x = vertices[i][0] + ((Math.random()*10)-5); 
        y = vertices[i][1] + ((Math.random()*10)-5); 
        if (x < 0) {
            x = 1; 
        } 
        if (x > width) {
            x = width; 
        } 
        if (y < 0) {
            y = 1; 
        } 
        if (y > height) {
            y = height-1; 
        } 
        vertices[i] = [x,y]; 
    }

    svg.append("g").attr("class","polygons")
    .selectAll("path")
    .data(voronoi.polygons(vertices))
    .enter().append("path")
    
        .attr("d", function(d){ 
            console.log(d); 
            var thepath = "M"+d.join("L")+"Z"; 
            console.log(thepath); 
            return thepath; 
        });

svg.append("g").attr("class","fuel")
    .selectAll("circle")
    .data(vertices)
    .enter().append("circle")
        .attr("cx",function(d){ return d[0]; })
        .attr("cy",function(d){ return d[1]; })
        .attr("r","10");
}
setInterval(function(){ 
    updatedata(); 
    }, 1000);

var height = 800
  , width = height / 1.138
  , top_margin = ~~( width / 13 )
  , amplitude = width / 350
  ;

var svg = d3.select( 'body' ).append( 'svg' )
    .attr( 'width', 960 )
    .attr( 'height', height + top_margin + 10 + 10 )
  .append( 'g' )
    .attr( 'transform', `translate(${960/2-width/2},${10})` );

d3.text('./data/pulsar.csv', function ( raw ) {

  var data = d3.csv.parseRows( raw, r => r.map( Number ) ),
      x = d3.scale.linear()
            .domain([ 0, data[0].length - 1 ])
            .range([ 0, width ]),
      y = d3.scale.linear()
            .domain([ 0, data.length -1 ])
            .range([ top_margin, height ]);

  var line = d3.svg.line()
      .x( (d,i) => x( i ) )
      .y( d => -d * amplitude );

  svg.append( 'g' )
    .selectAll( '.wave' ).data( data ).enter()
      .append( 'path' )
        .attr( 'transform', (d,i) => `translate(0,${y(i)})` )
        .attr( 'class', 'wave' )
        .attr( 'd', line )
        ;

  // top text
  svg.append( 'text' )
    .text( 'PRS B1919+21' )
    .attr( 'class', 'title' )
    .attr( 'x', 0 )
    .attr( 'dy', '.9em' );

  svg.append( 'text' )
    .text( '318 MHz' )
    .attr( 'class', 'freq' )
    .attr( 'x', width )
    .attr( 'dy', '.9em' );

  // bottom axis
  var axis = svg.append( 'g' )
    .attr( 'class', 'axis' )
    .attr( 'transform', `translate(0,${height+15})` );

  // the pulse-width is cropped to 92ms
  var ax = d3.scale.linear()
    .domain([ 0, 92 ])
    .range([ 0, width ]);

  axis.selectAll( '.tick' )
    .data( d3.range( 5, 300, 20 ) ).enter()
    .append( 'line' )
      .attr( 'x1', ax )
      .attr( 'x2', ax )
      .attr( 'y1', -5 );

  axis.append( 'text' )
    .text( '20 ms' )
    .attr( 'x', ax( 5 + 50 ) )
    .attr( 'y', 3 )
    .attr( 'dy', '.92em' );

var updatedata = function() {
console.log(".");
  for (var i = 0; i < data.length; i++) {
    for (var j = 0; j < data[i].length; j++) {

      data[i][j] = data[i][j] + (Math.random() *4) -2; 

      
    }
    
  }

  svg.append( 'g' )
    .selectAll( '.wave' )
    .remove() // remove all wave
    .data( data ).enter()
      .append( 'path' )
     
        .attr( 'transform', (d,i) => `translate(0,${y(i)})` )
        .attr( 'class', 'wave' )
        .attr( 'd', line )
        ;
}
    setInterval(function(){ 
     // updatedata(); 
      }, 20);
});

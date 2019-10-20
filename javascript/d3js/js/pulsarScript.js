var height = 450
  , width = height / 1.138
  , top_margin =  width / 13
  , amplitude = width / 350
  ;

var svg = d3.select( 'body' ).append( 'svg' )
    .attr( 'width', 960 )
    .attr( 'height', height + top_margin + 10 + 10 )
  .append( 'g' )
    .attr( 'transform', `translate(${960/2-width/2},${10})` );

function play() {
d3.text('./data/pulsar.csv', function ( raw ) {

     d3.csv.parseRows( raw, r => r.map( Number ) ),
      x = d3.scale.linear()
            .domain([ 0, data[0].length - 1 ])
            .range([ 0, width ]),
      y = d3.scale.linear()
            .domain([ 0, data.length - 1 ])
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
  var ax = d3.scale.linear().domain([ 0, 92 ])
    .range([ 0, width ]);

  axis.append( 'line' )
    .attr( 'x2', width );

  axis.selectAll( '.tick' )
    .data( d3.range( 5, 92, 20 ) ).enter()
    .append( 'line' )
      .attr( 'x1', ax )
      .attr( 'x2', ax )
      .attr( 'y1', -5 );

  axis.append( 'path' )
    .attr( 'd', `M0,0 L0,9.5
                 M0,5 L${ax(5)},5
                 M${ax(20)},0 L${ax(20)},9.5
                 M${ax(15)},5 L${ax(20)},5` )
    .attr( 'transform', `translate(${ax(45)},5)` );

  axis.append( 'text' )
    .text( '20 ms' )
    .attr( 'x', ax( 5 + 50 ) )
    .attr( 'y', 3 )
    .attr( 'dy', '.92em' );

});
}
play(); 

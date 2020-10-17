
d3.json('./data/arctic-sea-ice-extent-6.exhibit.json').then(function(d) {

  var w = window.outerWidth;

  var temperatures = [],
      dates = [],
      margin = { top: 10, right: 0, bottom: 30, left: 20 },
      height = 400 - margin.top - margin.bottom,
      width = w - margin.left - margin.right - 140;

  var   tempColor,
        yScale,
        yAxisValues,
        yAxisTicks,
        yGuide,
        xScale,
        xAxisValues,
        xAxisTicks,
        xGuide,
        colors,
        tooltip,
        myChart;

  var d = d.items;
  console.log(d.items); 

  for (var i = 0; i<d.length; i++) {
    temperatures.push(d[i].march);
    dates.push(d[i].year);
    console.log(d[i].year); 
  }

  
  var tMax = d3.max(temperatures);

  yScale = d3.scaleLinear()
    .domain([0, tMax])
    .range([0,height]);

  yAxisValues = d3.scaleLinear()
    .domain([0, tMax])
    .range([height,0]);

  yAxisTicks = d3.axisLeft(yAxisValues)
    .ticks(10)

  xScale = d3.scaleBand()
    .domain(temperatures)
    .paddingInner(.1)
    .paddingOuter(.1)
    .range([0, width])

  xAxisValues = d3.scaleTime()
    .domain([dates[0],dates[(dates.length-1)]])
    .range([0, width])

  xAxisTicks = d3.axisBottom(xAxisValues)
    .ticks(10)

  colors = d3.scaleLinear()
    .domain([4, 6, d3.max(temperatures)])
    .range(['yellow', 'pink', 'green'])

  tooltip = d3.select('body')
    .append('div')
    .style('position', 'absolute')
    .style('padding', '0 10px')
    .style('background', 'white')
    .style('opacity', 0);

  myChart = d3.select('#viz').append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform',
      'translate(' + margin.left + ',' + margin.right + ')')
    .selectAll('rect').data(temperatures)
    .enter().append('rect')
      .attr('fill', colors)
      .attr('width', function(d) {
        return xScale.bandwidth();
      })
      .attr('height', 0)
      .attr('x', function(d) {
        return xScale(d);
      })
      .attr('y', height)
      .on('mouseover', function(d) {
        tooltip.transition().duration(100)
          .style('opacity', .9)
        tooltip.html(
          '<div style="font-size: 1.2rem; font-weight: bold">' +
            d + '.000 m2</div>'
        )
          .style('left', (d3.event.pageX -35) + 'px')
          .style('top', (height+20) + 'px')
          .style('zIndex', 1000)
        tempColor = this.style.fill;
        d3.select(this)
          .style('fill', 'lightgray')
      })
      .on('mouseout', function(d) {
        tooltip.html('')
        d3.select(this)
          .style('fill', tempColor)
      });
      console.log(myChart);

  yGuide = d3.select('#viz svg').append('g')
            .attr('transform', 'translate(20,0)')
            .call(yAxisTicks)

  xGuide = d3.select('#viz svg').append('g')
            .attr('transform', 'translate(20,'+ height + ')')
            .call(xAxisTicks)

  myChart.transition()
    .attr('height', function(d) {
      return yScale(d);
    })
    .attr('y', function(d) {
      return height - yScale(d);
    })
    .delay(function(d, i) {
      return i * 20;
    })
    .duration(4000)
    .ease(d3.easeBounceOut)

}); // json import

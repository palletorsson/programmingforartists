
d3.json('./data/arctic-sea-ice-extent-6.json').then(function(d) {
    // then() <--
    // console.log(d);  <-- d <--

    var w = window.outerWidth;

    // style
    var margin = { top: 10, right: 0, bottom: 30, left:20 },
      height = 400 - margin.top - margin.bottom,
      width = w - margin.left - margin.right - 140;

    console.log(width);
    // ticks and scales
    var extentSeptember = [],
        dates = [],
        tempColor,
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
  
 
  // välj ut rätt element, all items
  var d = d.items;
  console.log(d); 

  // här använder vi en for loop för att fylla på två listor, extentSeptember och dates
  for (var i = 0; i< d.length; i++) {
    extentSeptember.push(d[i].september);
    dates.push(d[i].year);
  }

  console.log("extentSeptember: ", extentSeptember); 
  console.log("Dates: ",  dates);


  // ta fram max tempraturen
  var tMax = d3.max(extentSeptember);
  console.log("max temp", tMax); 

  // skalor hjälper oss att mapp värden i grafens storlek
  // skala vertikalt i höjdled, mängden is genom höjden
  yScale = d3.scaleLinear()
    .domain([0, tMax]) // våra värden från 0 till tMax
    .range([0, height]); // skalan som den skall passa in i 
    
  // används i ticks nedan
  yAxisValues = d3.scaleLinear()
    .domain([0, tMax])
    .range([height, 0]);

  // upplösning vertikalt
  yAxisTicks = d3.axisLeft(yAxisValues)
    .ticks(10)
 
 // skala från horizontalt i sidled, genom att mappa årtal och vidden
  xScale = d3.scaleBand()
    .domain(extentSeptember)
    .paddingInner(.1)
    .paddingOuter(.1)
    .range([0, width])
    console.log("xBandwidt: "+ xScale); 

  var startdate = dates[0]; 
  var enddate = dates[(dates.length-1)]; 
  console.log("startdate - enddate: " + startdate, enddate);

  // skapa scala genom att mappa data mot vidden 
  xAxisValues = d3.scaleTime()
    .domain([startdate, enddate])
    .range([0, width]); 
 
  // ge skalan till axisBottom, längst ner skriv ut skalan med genom call()
  xAxisTicks = d3.axisBottom(xAxisValues)
    .ticks(20);

  // färgskala på staplarna
  colors = d3.scaleLinear()
    .domain([4, 6, tMax])
    .range(['pink', 'fuchsia', 'yellow'])

  // tooltip
  tooltip = d3.select('body')
    .append('div')
    .style('position', 'absolute')
    .style('padding', '0 10px')
    .style('background', 'white')
    .style('opacity', 0);

  // 
  myChart = d3.select('#viz').append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.right + ')')
    .selectAll('rect')
    .data(extentSeptember)
    .enter().append('rect')
      .attr('fill', colors)
      .attr('width', function(d) {
        return xScale.bandwidth();
      })
      .attr('height', 0)
      .attr('x', function(d) {
        console.log("x scale ", xScale(d), d)
        return xScale(d);
      })
      .attr('y', height)
      .on('mouseover', function(d) {
        tooltip.transition().duration(100)
          .style('opacity', .8)
        tooltip.html(
          '<div style="font-size: 1.2rem; font-weight: bold">' +
            d + '.000 m2</div>'
        )
          .style('left', (d3.event.pageX -35) + 'px')
          .style('top', (height+20) + 'px')
          .style('zIndex', 1000)
        // spara den aktuella fill färgen 
        tempColor = this.style.fill;
        d3.select(this)
          .style('fill', 'brown')
      })
      .on('mouseout', function(d) {
        tooltip.html('')
        d3.select(this)
          // återställ fill färgen 
          .style('fill', tempColor)
      });
      console.log(myChart);

  // ticks till höger
  yGuide = d3.select('#viz svg').append('g')
            .attr('transform', 'translate(20,0)')
            .call(yAxisTicks)

  // ticks under
  xGuide = d3.select('#viz svg').append('g')
            .attr('transform', 'translate(20,'+ height + ')')
            .call(xAxisTicks); 
            
  // animationen stapelhöjd
  myChart.transition()
    .attr('height', function(d) {
      console.log("y scale:", yScale(d), d); 
      return yScale(d);
    })
    .attr('y', function(d) {
      // console.log("y h scale:", height - yScale(d), d);
      return height - yScale(d);
    })
    .delay(function(d, i) {
      return i * 20;
    })
    // animations effect
    .duration(4000)
    .ease(d3.easeBounceOut)

}); // json import

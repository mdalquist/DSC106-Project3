<script>
  import { onMount } from 'svelte';
  import * as d3 from 'd3';

  onMount(() => { 
    async function fetchData() {
        const response = await fetch('filtered_pitch_data.csv');
        const pitchData = await response.text();
        const parsedData = d3.csvParse(pitchData);

        var svg = d3.select("svg"),
              margin = 200,
              width = svg.attr("width") - margin,
              height = svg.attr("height") - margin

        var xScale = d3.scaleLinear().domain([-3, 3]).range([0, width]);
        var yScale = d3.scaleLinear().domain([-1, 5]).range([height, 0]);

        svg.append('text')
              .attr('x', width/2 + 100)
              .attr('y', height - 15 + 150)
              .attr('text-anchor', 'middle')
              .style('font-family', 'Helvetica')
              .style('font-size', 12)
              .text('Plate Location');
        svg.append('text')
              .attr('text-anchor', 'middle')
              .attr('transform', 'translate(60,' + height + ')rotate(-90)')
              .style('font-family', 'Helvetica')
              .style('font-size', 12)
              .text('Pitch Height');

        var colorScale = d3.scaleOrdinal()
          .domain(["Fastball", "Changeup", "Curveball", "Slider"]) 
          .range(["red", "green", "blue", "orange"]); 


        var div = d3.select("body").append("div")   // we also want to display data upon the hovering
                      .attr("class", "tooltip")
                      .style("opacity", 0);

        svg.append('g')
          .selectAll("dot")
          .data(parsedData)
          .enter()
          .append("circle")
            .attr("cx", function (d) { return xScale(d['PlateLocSide']); } )
            .attr("cy", function (d) { return yScale(d['PlateLocHeight']); } )
            .attr("r", 2)
            .attr("transform", "translate(" + 100 + "," + 100 + ")")
            .style("fill", function (d) { return colorScale(d['TaggedPitchType'])})

            .on('mouseover', function (event, d) {
                d3.select(this).transition()
                  .duration('100')
                  .attr("r", 7);          //increases the size of the point on hover


            // lets make div appear 

                div.transition()
                    .duration(100)
                    .style("opacity", 1); 

                div.html('Batter: ' + d['Batter'] + '<br>Team: ' + d['BatterTeam'] + '<br>Pitch Type: ' 
                        + d['TaggedPitchType'] + '<br>Velocity: ' + d['RelSpeed'] + '<br>Induced Vertical Break: '
                        + d['InducedVertBreak'] + '<br>Horizontal Break: ' + d['HorzBreak'] + '<br>Pitch Result: '
                        + d['PitchCall'] + '<br>Play Result: ' + d['PlayResult'])
                  .style("left", (event.x + 10) + "px")
                  .style("top", (event.y - 15) + "px");
                
            })         
                
            .on('mouseout', function (event, d) {
              
                d3.select(this).transition()
                  .duration('200')
                  .attr("r", 2);                    //Returns the size of the point when not hovering
            
            // lets make the div disappear just like the size

                div.transition()
                  .duration(100)
                  .style("opacity", 0);

            })
          

          
        
          ;

        svg.append("g")
         .attr("transform", "translate(" + 100 + "," + 300 + ")")
         .call(d3.axisBottom(xScale));
        
        svg.append("g")
          .attr("transform", "translate(" + 100 + "," + 100 + ")")
          .call(d3.axisLeft(yScale))
          
          ;

        svg.append('rect')
          .attr('x', xScale(-8.5/12))
          .attr('y', yScale(3.5))
          .attr("transform", "translate(" + 100 + "," + 100 + ")")
          .attr('width', xScale(17/12) - xScale(0))
          .attr('height', yScale(0) - yScale(2))
          .attr('stroke', 'black')
          .attr('fill', 'none')
          .style('stroke-width', '2px')
          
          
          
          
          
          ;
    }

    fetchData();
  });
</script>

<main>

  
    <h1 style="font-family: 'Bebas Neue', sans-serif">Pitch Location Visualization</h1>
    <hr style="width: 50%; margin: auto; margin-top: 5px; border-top: 2px solid black;">
    <img src="assets/baseball.png" alt="Baseball Image" style="width: 100px; height: auto; position: absolute; bottom: 10px; left: 10px;">git
    <body></body>

    <style>

        body {
           
            text-align: center; /* Center text horizontally */
            background-color: RGB(255, 255, 255);
            
        
        }

    </style>



    

    

</main>

<style>

  @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
  body {
    font-family: "Bebas Neue", sans-serif;
  }  



</style>

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

        const tooltip = d3.select("#my_dataviz")
          .append("div")
          .style("opacity", 0)
          .attr("class", "tooltip")
          .style("background-color", "white")
          .style("border", "solid")
          .style("border-width", "1px")
          .style("border-radius", "5px")
          .style("padding", "10px")

        const mouseover = function(event, d) {
          tooltip
            .style("opacity", 1)
        }

        const mousemove = function(event, d) {
          tooltip
            .html("Velocity: " + d['RelSpeed'])
            .style("left", (event.x)/2 + "px") 
            .style("top", (event.y)/2 + "px")
        }

        const mouseleave = function(event,d) {
          tooltip
            .transition()
            .duration(200)
            .style("opacity", 0)
        }

        svg.append('g')
          .selectAll("dot")
          .data(parsedData)
          .enter()
          .append("circle")
            .attr("cx", function (d) { return xScale(d['PlateLocSide']); } )
            .attr("cy", function (d) { return yScale(d['PlateLocHeight']); } )
            .attr("r", 2)
            .attr("transform", "translate(" + 100 + "," + 100 + ")")
            .style("fill", "#CC0000")
          .on("mouseover", mouseover)
          .on("mousemove", mousemove)
          .on("mouseleave", mouseleave);
    }

    fetchData();
  });
</script>

<main>
  <h1>Pitch Location Visualization</h1>
</main>

<style>
  /* Write your CSS here */
</style>

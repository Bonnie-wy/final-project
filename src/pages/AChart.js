import React, { useRef } from 'react'
import * as d3 from 'd3'
import { useEffect } from 'react'

const data = [
  {date: '28/12/2021', Activity: 2},
  {date: '29/12/2021', Activity: 0},
  {date: '30/12/2021', Activity: 1}
]

const AreaChart = () => {
  const areaChart = useRef()
  const dimensions = { width: 400, height: 300 }

  useEffect(() => {
    const svg = d3.select(areaChart.current)
                  .attr('width', dimensions.width)
                  .attr('height', dimensions.height)
                  .style('background-color', 'lightgrey')

    const x = d3.scaleTime()
                .domain(d3.extent(data, d=>d3.timeParse('%d/%m/%Y')(d.date)))
                .range([0, dimensions.width-100])

    svg.append('g')
        .call(d3.axisBottom(x))
        .attr('transform', 'translate(50, 270)')

    const y = d3.scaleLinear()
                .domain([0, d3.max(data, d=>d.Activity)])
                .range([dimensions.height-100,0])

    svg.append('g')
        .call(d3.axisLeft(y))
        .attr('transform', 'translate(50, 70)')

    const area = d3.area()
                    .x(d=>x(d3.timeParse('%d/%m/%Y')(d.date)))
                    .y0(y(0))
                    .y1(d=>y(d.Activity))

    svg.append('path')
        .datum(data)
        .attr('d', area)
        .attr('fill', '#f25cb4')
        .attr('stroke', '#c70469')
        .attr('stroke-width', 2)
        .attr('transform', 'translate(50,70)')
  })

  return (
    <div id="chartArea">
      <svg ref={areaChart}></svg>
    </div>
  )
}

export default AreaChart

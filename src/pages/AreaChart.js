import React from 'react'
import Chart from 'react-apexcharts'

const AreaChart = ({ workouts }) => {

  console.log(workouts)

  const dates = workouts.map(workout => {
    const splitted = workout.timeStamp.split("/")
    const newDate = new Date(+splitted[2], splitted[1] - 1, splitted[0]).toString().split(" ")
    return `${newDate[2]} ${newDate[1]}`
  })

  const counts = {}
  dates.forEach((x) => { counts[x] = (counts[x] || 0) + 1; })

  const xAxis = []
  const yAxis = []

  for (const [key, value] of Object.entries(counts)) {
    xAxis.push(key)
    yAxis.push(value)
  }

  const options = {
    chart: {
      type: 'area',
      height: 350,
      zoom: {
        enabled: false
      }
    },
    title: {
      text: 'recent activity'
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    colors: ['#ffb600'],
    fill: {
      gradient: {
        enabled: true,
        opacityFrom: 1,
        opacityTo: 0.6
      }
    },
    xaxis: {
      categories: xAxis
    },
    yaxis: {
      opposite: true
    },
    legend: {
      horizontalAlign: 'left'
    }
  }
  const series = [{
    name: 'Activity',
    data: yAxis
  }]

  return (
    <Chart
      options={options}
      series={series}
      type="area"
      height={350} />
  )
}

export default AreaChart


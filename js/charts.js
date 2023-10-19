fetch('https://multiapi-app.fly.dev/coasters/allCoasters')

    .then(response => response.json())
    .then(coasters => printCoastersCharts(coasters))


function printCoastersCharts(coasters) {

    const selectedCoasters = coasters.slice(0, 5)



    printSpeedChart(selectedCoasters)
    printLengthChart(coasters)
    printHeightChart(coasters)
    printInversionsChart(coasters)
    printMixedChart(selectedCoasters)
}


function printSpeedChart(selectedCoasters) {
    const chartData = {
        labels: selectedCoasters.map(elm => elm.name),
        datasets: [{
            data: selectedCoasters.map(elm => elm.speed),
            backgroundColor: ['red'],

        }]
    }
    const chartOptions = {
        plugins: {
            legend: {
                display: false
            }
        }

    }
    new Chart('chart1', {
        type: 'bar',
        data: chartData,
        options: chartOptions
    })


}



function printLengthChart(coaster) {
    const lengthChart = coasters.filter(elm => elm.length < 1000)
    const lengthChart2 = coasters.filter(elm => elm.length >= 1000 && elm.length <= 1500)
    const lengthChart3 = coasters.filter(elm => elm.length > 1500)

}
const chartData = {
    labels: ['+1000m', '1000-1500m', '+1500m'],
    datasets: [{
        data: [lengthChart.length, lengthChart2.length, lengthChart3.length],
        backgroundColor: ['red', 'blue', 'green']
    }]

        const chartOptions = {
        plugins: {
            legend: {
                display: true
            }
        }

    }
}

new Chart('chart2', {
    type: 'doughnut',
    data: chartData,
    options: chartOptions
})




function printHeightChart(coasters) { }


function printInversionsChart(coasters) { }


function printMixedChart(selectedCoasters) { }
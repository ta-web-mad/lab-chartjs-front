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
            data: selectedCoasters.map(elm => elm.speed),          // mapear las montañas rusas para obtener su speed            
            backgroundColor: ['rgba(116, 72, 194, 0.4)', 'rgba(33, 192, 215, 0.4)', 'rgba(217, 158, 43, 0.4)', 'rgba(205, 58, 129, 0.4)', 'rgba(156, 153, 204, 0.4)'],
            borderColor: ['rgba(116, 72, 194, 1)', 'rgba(33, 192, 215, 1)', 'rgba(217, 158, 43, 1)', 'rgba(205, 58, 129, 1)', 'rgba(156, 153, 204, 1)'],
            borderWidth: 2
        }]
    }
    const chartOptions = {
        plugins: {
            legend: {
                display: false
            }
        }
    }

    new Chart('chart1', { type: 'bar', data: chartData, options: chartOptions })
}


function printLengthChart(coasters) {

    const over = coasters.filter(element => {
        return element.length >= 1500
    })

    const medium = coasters.filter(element => {
        return element.length < 1500 && element.length >= 1000
    })

    const small = coasters.filter(element => {
        return element.length < 1000
    })


    const chartData = {
        labels: ['>1500', '1500-1000', '<1000'],
        datasets: [{
            data: [over.length, medium.length, small.length],
            backgroundColor: ['rgba(116, 72, 194, 0.4)', 'rgba(33, 192, 215, 0.4)', 'rgba(217, 158, 43, 0.4)'],
            borderColor: ['rgba(116, 72, 194, 1)', 'rgba(33, 192, 215, 1)', 'rgba(217, 158, 43, 1)'],
            borderWidth: 2
        }]
    }
    const chartOptions = {
        plugins: {
            legend: {
                position: 'left'
            }
        }
    }

    new Chart('chart2', { type: 'doughnut', data: chartData, options: chartOptions })


}


function printHeightChart(coasters) {

    const eeuu = coasters.filter(element => {
        return element.country === 'United States'
    })

    const japan = coasters.filter(element => {
        return element.country === 'Japan'
    })

    const spain = coasters.filter(element => {
        return element.country === 'Spain'
    })

    const china = coasters.filter(element => {
        return element.country === 'China'
    })


    const chartData = {
        labels: ['EEUU', 'Japan', 'Spain', 'China'],
        datasets: [{
            data: [eeuu.length, japan.length, spain.length, china.length],
            backgroundColor: ['rgba(116, 72, 194, 0.4)', 'rgba(33, 192, 215, 0.4)', 'rgba(217, 158, 43, 0.4)', 'rgba(205, 58, 129, 0.4)'],
            borderColor: ['rgba(116, 72, 194, 1)', 'rgba(33, 192, 215, 1)', 'rgba(217, 158, 43, 1)', 'rgba(205, 58, 129, 1)'],
            borderWidth: 2
        }]
    }
    const chartOptions = {
        plugins: {
            legend: {
                position: 'left',
            }
        },
        scales: {
            r: {
                ticks: {
                    display: false
                }

            }

        }
    }

    new Chart('chart3', { type: 'polarArea', data: chartData, options: chartOptions })

}


function printInversionsChart(coasters) {

    const inversion = coasters.filter(element => {
        return element.inversions > 5
    })


    const chartData = {
        labels: inversion.map(element => element.name),
        datasets: [{
            data: inversion.map(element => element.inversions),
            backgroundColor: ['rgba(33, 192, 215, 0.4)'],
            borderColor: ['rgba(33, 192, 215, 1)'],
            borderWidth: 2
        }]
    }

    const chartOptions = {
        scales: {
            r: {
                ticks: {
                    display: false
                }

            }
        }

    }


    new Chart('chart4', { type: 'radar', data: chartData, options: chartOptions })
}


function printMixedChart(selectedCoasters) {
    const chartData = {
        labels: selectedCoasters.map(elm => elm.name),
        datasets: [{
            data: selectedCoasters.map(elm => elm.height),
            backgroundColor: ['rgba(116, 72, 194, 0.4)', 'rgba(33, 192, 215, 0.4)', 'rgba(217, 158, 43, 0.4)', 'rgba(205, 58, 129, 0.4)', 'rgba(156, 153, 204, 0.4)'],
            borderColor: 'rgba(33, 192, 215, 1)',
            borderWidth: 5,
            type: 'line',
            tension: 0.6
        },
        {
            data: selectedCoasters.map(elm => elm.speed),
            backgroundColor: ['rgba(217, 158, 43, 0.4)'],
            borderColor: ['rgba(217, 158, 43, 1)'],
            borderWidth: 2
        }]
    }
    const chartOptions = {
        plugins: {
            legend: {
                display: false
            }
        }
    }

    new Chart('chart5', { type: 'bar', data: chartData, options: chartOptions })

}
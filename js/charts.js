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

    const selectedCoastersSpeed = selectedCoasters.map((eachCoaster) => {
        return eachCoaster.speed
    })

    const selectedCoastersName = selectedCoasters.map((eachCoaster) => {
        return eachCoaster.name
    })

    const chartData = {
        labels: selectedCoastersName,
        datasets: [{
            data: selectedCoastersSpeed,
            backgroundColor: ['rgba(116, 72, 194, 0.4)', 'rgba(33, 192, 215, 0.4)', 'rgba(217, 158, 43, 0.4)', 'rgba(205, 58, 129, 0.4)'],
            borderColor: ['rgba(116, 72, 194, 1)', 'rgba(33, 192, 215, 1)', 'rgba(217, 158, 43, 1)', 'rgba(205, 58, 129, 1)'],
            borderWidth: 3
        }]
    }

    const optionsData = {
        plugins: {
            legend: {
                display: false
            }
        }
    }

    new Chart('chart1', { type: 'bar', data: chartData, options: optionsData })
}


function printLengthChart(coasters) {

    const highestCoasters = coasters.filter((eachCoaster) => {
        return eachCoaster.length > 1500
    })

    const mediumCoasters = coasters.filter((eachCoaster) => {
        return eachCoaster.length > 1000 && eachCoaster.length < 1500
    })

    const lowestCoasters = coasters.filter((eachCoaster) => {
        return eachCoaster < 1000
    })


    const chartData = {
        labels: ["-1000m", "1000- 1500m", "+ 1500m"],
        datasets: [{
            data: [highestCoasters.length, mediumCoasters.length, lowestCoasters.length],
            backgroundColor: ['rgba(116, 72, 194, 0.4)', 'rgba(33, 192, 215, 0.4)', 'rgba(217, 158, 43, 0.4)', 'rgba(205, 58, 129, 0.4)'],
            borderColor: ['rgba(116, 72, 194, 1)', 'rgba(33, 192, 215, 1)', 'rgba(217, 158, 43, 1)', 'rgba(205, 58, 129, 1)'],
            borderWidth: 3
        }]
    }

    const optionsData = {
        plugins: {
            legend: {
                position: 'left'
            }
        }
    }

    new Chart('chart2', { type: 'doughnut', data: chartData, options: optionsData })

}

function printHeightChart(coasters) {

    const USACoaster = coasters.filter((eachCoaster) => {
        return eachCoaster.country === 'United States'
    })

    const japanCoaster = coasters.filter((eachCoaster) => {
        return eachCoaster.country === 'Japan'
    })

    const spainCoaster = coasters.filter((eachCoaster) => {
        return eachCoaster.country === 'Spain'
    })

    const chinaCoaster = coasters.filter((eachCoaster) => {
        return eachCoaster.country === 'China'
    })

    const chartData = {
        labels: ["EEUU", "Japón", "España", "China"],
        datasets: [{
            data: [USACoaster.length, japanCoaster.length, spainCoaster.length, chinaCoaster.length],
            backgroundColor: ['rgba(116, 72, 194, 0.4)', 'rgba(33, 192, 215, 0.4)', 'rgba(217, 158, 43, 0.4)', 'rgba(205, 58, 129, 0.4)'],
            borderColor: ['rgba(116, 72, 194, 1)', 'rgba(33, 192, 215, 1)', 'rgba(217, 158, 43, 1)', 'rgba(205, 58, 129, 1)'],
            borderWidth: 3
        }]
    }

    const optionsData = {
        plugins: {
            legend: {
                position: 'left'
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

    new Chart('chart3', { type: 'polarArea', data: chartData, options: optionsData })
}


function printInversionsChart(coasters) {

    const inversionCoaster = coasters.filter((eachCoaster) => {
        return eachCoaster.inversions > 5
    })

    const inversionCoasterName = inversionCoaster.map((eachCoaster) => {
        return eachCoaster.name
    })

    const inversionCoasterInversion = inversionCoaster.map((eachCoaster) => {
        return eachCoaster.inversions
    })

    const chartData = {
        labels: inversionCoasterName,
        datasets: [{
            data: inversionCoasterInversion,
            backgroundColor: ['rgba(33, 192, 215, 0.4)'],
            borderColor: ['rgba(33, 192, 215, 1)'],
            borderWidth: 3
        }]
    }

    const optionsData = {
        plugins: {
            legend: {
                display: false
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

    new Chart('chart4', { type: 'radar', data: chartData, options: optionsData })

}


function printMixedChart(selectedCoasters) {

    const selectedCoastersName = selectedCoasters.map((eachCoaster) => {
        return eachCoaster.name
    })

    const selectedCoastersSpeed = selectedCoasters.map((eachCoaster) => {
        return eachCoaster.speed
    })

    const selectedCoastersHeight = selectedCoasters.map((eachCoaster) => {
        return eachCoaster.height
    })


    const chartData = {
        labels: selectedCoastersName,
        datasets: [
            {
                data: selectedCoastersSpeed,
                backgroundColor: ['rgba(217, 158, 43, 0.4)'],
                borderColor: ['rgba(217, 158, 43, 1)'],
                borderWidth: 3
            },
            {
                data: selectedCoastersHeight,
                lineTension: .3,
                backgroundColor: ['rgba(33, 192, 215, 1)'],
                borderColor: ['rgba(33, 192, 215, 1)'],
                borderWidth: 3,
                type: 'line'
            }
        ]
    }

    const optionsData = {
        plugins: {
            legend: {
                display: false
            }
        }
    }

    new Chart('chart5', { type: 'bar', data: chartData, options: optionsData })
}

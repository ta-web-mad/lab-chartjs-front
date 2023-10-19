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
            backgroundColor: ['rgba(116, 72, 194, 0.4)', 'rgba(33, 192, 215, 0.4)', 'rgba(217, 158, 43, 0.4)', 'rgba(205, 58, 129, 0.4)', 'rgba(156, 153, 204, 0.4)', 'rgba(225, 78, 202, 0.4)'],
            borderColor: ['rgba(116, 72, 194, 1)', 'rgba(33, 192, 215, 1)', 'rgba(217, 158, 43, 1)', 'rgba(205, 58, 129, 1)', 'rgba(156, 153, 204, 1)', 'rgba(225, 78, 202, 1)'],
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
    const longRollerCoasters = coasters.filter(elm => {
        if (elm.length > 1500) {
            return true
        } else {
            false
        }
    })




    const midRollerCoasters = coasters.filter(elm => {
        if (elm.length <= 1500 && elm.length > 1000) {
            return true
        } else {
            false
        }
    })

    const smallRollerCoasters = coasters.filter(elm => {
        if (elm.length <= 1000) {
            return true
        } else {
            false
        }
    })



    const chartData = {
        labels: ["- 1000m", "1000-1500m", "+1500m"],
        datasets: [{
            data: [smallRollerCoasters.length, midRollerCoasters.length, longRollerCoasters.length],
            backgroundColor: ['rgba(116, 72, 194, 0.4)', 'rgba(33, 192, 215, 0.4)', 'rgba(217, 158, 43, 0.4)'],
            borderColor: ['rgba(116, 72, 194, 1)', 'rgba(33, 192, 215, 1)', 'rgba(217, 158, 43, 1)', 'rgba(205, 58, 129, 1)'],
            borderWidth: 2
        }]
    }

    const chartOptions = {
        plugins: {
            legend: {
                display: true,
                position: 'left'
            }
        }
    }



    new Chart('chart2', { type: 'doughnut', data: chartData, options: chartOptions })
}


function printHeightChart(coasters) {

    const eeuuRollerCoasters = coasters.filter(elm => {
        if (elm.country == "United States") {
            return true
        } else {
            false
        }
    })

    const japanRollerCoasters = coasters.filter(elm => {
        if (elm.country == "Japan") {
            return true
        } else {
            false
        }
    })

    const spainRollerCoasters = coasters.filter(elm => {
        if (elm.country == "Spain") {
            return true
        } else {
            false
        }
    })

    const chinaRollerCoasters = coasters.filter(elm => {
        if (elm.country == "China") {
            return true
        } else {
            false
        }
    })

    const chartData = {
        labels: ["EEUU", "Japón", "España", "China"],
        datasets: [{
            data: [eeuuRollerCoasters.length, japanRollerCoasters.length, spainRollerCoasters.length, chinaRollerCoasters.length],
            backgroundColor: ['rgba(116, 72, 194, 0.4)', 'rgba(33, 192, 215, 0.4)', 'rgba(217, 158, 43, 0.4)', 'rgba(205, 58, 129, 0.4)'],
            borderColor: ['rgba(116, 72, 194, 1)', 'rgba(33, 192, 215, 1)', 'rgba(217, 158, 43, 1)', 'rgba(205, 58, 129, 1)', 'rgba(156, 153, 204, 1)'],
            borderWidth: 2
        }]
    }

    const chartOptions = {
        plugins: {
            legend: {
                display: true,
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


    new Chart('chart3', { type: 'polarArea', data: chartData, options: chartOptions })

}


function printInversionsChart(coasters) {

    const moreInvestedCoasters = coasters.filter(elm => {
        if (elm.inversions > 5) {
            return true
        } else {
            false
        }
    })


    const chartData = {

        labels: moreInvestedCoasters.map(elm => elm.name),
        datasets: [{
            data: moreInvestedCoasters.map(elm => elm.inversions),
            backgroundColor: 'rgba(33, 192, 215, 0.4)',
            borderColor: 'rgba(33, 192, 215, 1)',
            borderWidth: 2
        }],


    }

    const chartOptions = {
        plugins: {
            legend: {
                display: false,
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




    new Chart('chart4', { type: 'radar', data: chartData, options: chartOptions })

}



function printMixedChart(selectedCoasters) {

    const chartData = {
        labels: selectedCoasters.map(elm => elm.name),
        datasets: [
            {
                type: 'line',
                data: selectedCoasters.map(elm => elm.height),
                backgroundColor: 'rgba(33, 192, 215, 0.4)',
                borderColor: 'rgba(33, 192, 215, 1)',
                borderWidth: 5,
                tension: 0.5

            },
            {
                type: 'bar',
                data: selectedCoasters.map(elm => elm.speed),
                backgroundColor: 'rgba(217, 158, 43, 0.4)',
                borderColor: 'rgba(217, 158, 43, 1)',
                borderWidth: 2,

            }
        ]
    }

    const chartOptions = {
        plugins: {
            legend: {
                display: false
            }
        }
    }


    new Chart('chart5', {
        data: chartData,
        options: chartOptions
    })

}
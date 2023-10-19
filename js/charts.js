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
            borderWidth: 1

        }]
    }

    const chartOptions = {
        plugins: {
            legend: {
                display: false,
            }
        }
    }


    new Chart('chart1', {
        type: 'bar',
        data: chartData,
        options: chartOptions
    })
}


function printLengthChart(coasters) {

    const min = coasters.filter(elm => {
        return elm.length < 1000
    })
    const med = coasters.filter(elm => {
        return elm.length >= 1000 && elm.length <= 1500
    })

    const max = coasters.filter(elm => {
        return elm.length > 1500
    })


    const chartData = {

        labels: ['- 1000m', '1000-1500m', '+1500m'],
        datasets: [{
            data: [min.length, med.length, max.length],
            backgroundColor: ['rgba(116, 72, 194, 0.4)', 'rgba(33, 192, 215, 0.4)', 'rgba(217, 158, 43, 0.4)'],
            borderColor: ['rgba(116, 72, 194, 1)', 'rgba(33, 192, 215, 1)', 'rgba(217, 158, 43, 1)'],
            borderWidth: 1

        }]
    }

    const chartOptions = {
        plugins: {
            legend: {
                position: 'left',
            }
        }
    }


    new Chart('chart2', {
        type: 'doughnut',
        data: chartData,
        options: chartOptions
    })
}

function printHeightChart(coasters) {
    const eeuu = coasters.filter(elm => {
        return elm.country === 'United States'
    })
    const jap = coasters.filter(elm => {
        return elm.country === 'Japan'
    })

    const esp = coasters.filter(elm => {
        return elm.country === 'Spain'
    })
    const chi = coasters.filter(elm => {
        return elm.country === 'China'
    })



    const chartData = {

        labels: ['EEUU', 'JAPON', 'ESPAÑA', 'CHINA'],
        datasets: [{
            data: [eeuu.length, jap.length, esp.length, chi.length],
            backgroundColor: ['rgba(116, 72, 194, 0.4)', 'rgba(33, 192, 215, 0.4)', 'rgba(217, 158, 43, 0.4)', 'rgba(205, 58, 129, 0.4)'],
            borderColor: ['rgba(116, 72, 194, 1)', 'rgba(33, 192, 215, 1)', 'rgba(217, 158, 43, 1)', 'rgba(205, 58, 129, 1)'],
            borderWidth: 1

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


    new Chart('chart3', {
        type: 'polarArea',
        data: chartData,
        options: chartOptions
    })
}


function printInversionsChart(coasters) {
    const inver = coasters.filter(elm => {
        return elm.inversions > 5
    })
    console.log(inver)

    const chartData = {

        labels: inver.map(elm => elm.name),
        datasets: [{
            data: inver.map(elm => elm.inversions),
            backgroundColor: ['rgba(33, 192, 215, 0.4)'],
            borderColor: ['rgba(33, 192, 215, 1)'],
            borderWidth: 1

        }]
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


    new Chart('chart4', {
        type: 'radar',
        data: chartData,
        options: chartOptions
    })
}


function printMixedChart(selectedCoasters) {
    const chartData = {

        labels: selectedCoasters.map(elm => elm.name),
        datasets: [
            {
                data: selectedCoasters.map(elm => elm.speed),
                backgroundColor: ['rgba(217, 158, 43, 0.4)'],
                borderColor: ['rgba(217, 158, 43, 1)'],
                borderWidth: 1

            },
            {
                data: selectedCoasters.map(elm => elm.height),
                backgroundColor: ['rgba(33, 192, 215, 1)'],
                borderColor: ['rgba(33, 192, 215, 1)'],
                borderWidth: 5,
                type: 'line',
                tension: 0.5

            }

        ]
    }

    const chartOptions = {
        plugins: {
            legend: {
                display: false,
            }
        }
    }


    new Chart('chart5', {
        type: 'bar',
        data: chartData,
        options: chartOptions
    })


}
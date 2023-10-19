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
            backgroundColor: colors.alphas.slice(0, 4),
            borderColor: colors.solids.slice(0, 4),
            borderWidth: 1,

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

    const speed1 = coasters.filter(function (elm) {
        return elm.length < 1000
    }).length

    const speed2 = coasters.filter(function (elm) {
        return elm.length > 1000 && elm.length < 1500
    }).length

    const speed3 = coasters.filter(function (elm) {
        return elm.length > 1500
    }).length

    const chartData = {
        labels: ["-1000m", "1000-1500m", "+1500m"],
        datasets: [{
            data: [speed1, speed2, speed3],
            backgroundColor: colors.alphas.slice(0, 3),
            borderColor: colors.solids.slice(0, 3),
            borderWidth: 1,

        }]
    }

    const chartOptions = {
        plugins: {
            legend: {
                position: "left"
            }
        }
    }

    new Chart('chart2', { type: 'doughnut', data: chartData, options: chartOptions })
}


function printHeightChart(coasters) {
    const country1 = coasters.filter(function (elm) {
        return elm.country === "United States"
    }).length


    const country2 = coasters.filter(function (elm) {
        return elm.country === "Japan"
    }).length

    const country3 = coasters.filter(function (elm) {
        return elm.country === "Spain"
    }).length

    const country4 = coasters.filter(function (elm) {
        return elm.country === "China"
    }).length

    const chartData = {
        labels: ["EEUU", "Japón", "España", "China"],
        datasets: [{
            data: [country1, country2, country3, country4],
            backgroundColor: colors.alphas.slice(0, 4),
            borderColor: colors.solids.slice(0, 4),
            borderWidth: 1,
        }]
    }

    const chartOptions = {
        scales: {
            r: {
                ticks: {
                    display: false
                }
            }
        },
        plugins: {
            legend: {
                position: "left"
            }
        }
    }

    new Chart('chart3', { type: 'polarArea', data: chartData, options: chartOptions })


}


function printInversionsChart(coasters) {

    const inversions = coasters.filter(function (elm) {
        return elm.inversions > 5
    })

    console.log(inversions)

    const chartData = {
        labels: coasters.map(elm => elm.name),
        datasets: [{
            data: inversions,
            backgroundColor: colors.alphas,
            borderColor: colors.solids,
            borderWidth: 1,

        }]
    }

    const chartOptions = {
        plugins: {
            legend: {
                display: false
            }
        }
    }

    new Chart('chart4', { type: 'radar', data: chartData, options: chartOptions })

}


function printMixedChart(selectedCoasters) { }
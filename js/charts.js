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
        labels: selectedCoasters.map((elm) => {
            return elm.name
        }),
        datasets: [
            {
                data: selectedCoasters.map((elm) => {
                    return elm .speed
                }),
                backgroundColor: colors.alphas,
                borderColor: colors.solids,
                borderWidth: 2
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
    new Chart(
        'chart1',
        {
            type: 'bar',
            data: chartData,
            options: chartOptions
        }
    )
}


function printLengthChart(coasters) {
    //map contador
    const lowerCoasters = coasters.filter((elm) => {
        if (elm.length < 1000) {
            return true
        }
        else {
            return false
        }
    })
    const higherCoasters = coasters.filter((elm) => {
        if (elm.length > 1500) {
            return true
        }
        else {
            return false
        }
    })
    const normalCoasters = coasters.filter((elm) => {
        if (elm.length >= 1000 && elm.length <= 1500) {
            return true
        }
        else {
            return false
        }
    })
    const chartData = {
        labels: ['-1000', '1000-1500', '+1500'],
        datasets: [
            {
                data: [lowerCoasters.length, normalCoasters.length, higherCoasters.length],
                backgroundColor: colors.alphas,
                borderColor: colors.solids,
                borderWidth: 2
            }
        ]
    }
    const chartOptions = {
        plugins: {
            legend: {
                position: 'left'
            }
        }
    }
    new Chart(
        'chart2',
        {
            type: 'doughnut',
            data: chartData,
            options: chartOptions
        }
    )
}


function printHeightChart(coasters) {
    let usaCounter = 0
    let japanCounter = 0
    let spainCounter = 0
    let chinaCounter = 0
    coasters.forEach((elm) => {
        if (elm.country.toLowerCase() === 'spain') {
            spainCounter++
        }
        else if (elm.country.toLowerCase() === 'united states') {
            usaCounter++
        }
        else if (elm.country.toLowerCase() === 'japan') {
            japanCounter++
        }
        else if (elm.country.toLowerCase() === 'china') {
            chinaCounter++
        }
    })
    const chartData = {
        labels: ['EEUU', 'Japón', 'España', 'China'],
        datasets: [
            {
                data: [usaCounter, japanCounter, spainCounter, chinaCounter],
                backgroundColor: colors.alphas,
                borderColor: colors.solids,
                borderWidth: 2
            }
        ]
    }
    const chartOptions = {
        plugins: {
            legend: {
                position: 'left'
            },
        },
        scales: {
            r: {
                ticks: {
                    display: false
                }
            }
        }
    }
    new Chart(
        'chart3',
        {
            type:'polarArea',
            data: chartData,
            options: chartOptions
        }
    )
}


function printInversionsChart(coasters) {
    const coastersWithMostInversions = coasters.filter((elm) => {
        if (elm.inversions > 5) {
            return true
        }
        else {
            return false
        }
    })
    const chartData = {
        labels: coastersWithMostInversions.map((elm) => {
            return elm.name
        }),
        datasets: [
            {
                data: coastersWithMostInversions.map((elm) => {
                    return elm.inversions
                }),
                fill: true,
                backgroundColor: colors.alphas[1],
                borderColor: colors.solids[1],
                borderWidth: 2
            }
        ]
    }
    const chartOptions = {
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
    console.log(coastersWithMostInversions)
    new Chart(
        'chart4',
        {
            type: 'radar',
            data: chartData,
            options: chartOptions
        }
    )
}


function printMixedChart(selectedCoasters) {
    const chartData = {
        labels: selectedCoasters.map((elm) => {
            return elm.name
        }),
        datasets: [
            {
                data: selectedCoasters.map((elm) => {
                    return elm.height
                }),
                backgroundColor: colors.alphas[1],
                borderColor: colors.solids[1],
                borderWidth: 4,
                type: 'line' 
            },
            {
                data: selectedCoasters.map((elm) => {
                    return elm.speed
                }),
                backgroundColor: colors.alphas[2],
                borderColor: colors.solids[2],
                borderWidth: 2,
            }
        ]
    }
    const chartOptions = {
        plugins: {
            legend: {
                display: false
            }
        },
        elements: {
            line: {
                tension: 0.4
            }
        }
    }
    new Chart(
        'chart5',
        {
            type: 'bar', //velocidad
            data: chartData,
            options: chartOptions
        }
    )
}
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

    const chart1data = {
        labels: selectedCoasters.map(function (eachCoaster) {
            return eachCoaster.name
        }),
        datasets: [{
            data: selectedCoasters.map(function (eachCoaster) {
                return eachCoaster.speed
            }),
            label: 'Km/h',
            backgroundColor: ['rgba(116, 72, 194, 0.4)', 'rgba(33, 192, 215, 0.4)', 'rgba(217, 158, 43, 0.4)', 'rgba(205, 58, 129, 0.4)', 'rgba(156, 153, 204, 0.4)'],
            borderColor: ['rgba(116, 72, 194, 1)', 'rgba(33, 192, 215, 1)', 'rgba(217, 158, 43, 1)', 'rgba(205, 58, 129, 1)', 'rgba(156, 153, 204, 1)'],
            borderWidth: 1
        }]

    }

    const optionsData = {
        plugins: {
            legend: {
                display: false
            }
        }
    }

    new Chart('chart1', { type: 'bar', data: chart1data, options: optionsData })

}


function printLengthChart(coasters) {

    const length1 = coasters.filter(eachCoaster => eachCoaster.length < 1000).length
    const length2 = coasters.filter(eachCoaster => eachCoaster.length >= 1000 && eachCoaster.length <= 1500).length
    const length3 = coasters.filter(eachCoaster => eachCoaster.length > 1500).length

    const chart2data = {
        labels: ['-1000m', '1000-1500m', '+1500m'],
        datasets: [{
            data: [length1, length2, length3],
            label: 'unidades',
            backgroundColor: ['rgba(116, 72, 194, 0.4)', 'rgba(33, 192, 215, 0.4)', 'rgba(217, 158, 43, 0.4)'],
            borderWidth: 1,
            borderColor: ['rgba(116, 72, 194, 1)', 'rgba(33, 192, 215, 1)', 'rgba(217, 158, 43, 1)'],
        }]
    }

    const optionsData = {
        plugins: {
            legend: {
                position: 'left'
            }
        }
    }

    new Chart('chart2', { type: 'doughnut', data: chart2data, options: optionsData })

}


function printHeightChart(coasters) {

    const quantity1 = coasters.filter(eachCoaster => eachCoaster.country === "United States").length
    const quantity2 = coasters.filter(eachCoaster => eachCoaster.country === "Japan").length
    const quantity3 = coasters.filter(eachCoaster => eachCoaster.country === "Spain").length
    const quantity4 = coasters.filter(eachCoaster => eachCoaster.country === "China").length

    const chart3data = {
        labels: ['EEUU', 'Japón', 'Esssssssspaña', 'China'],
        datasets: [{
            data: [quantity1, quantity2, quantity3, quantity4],
            label: 'unidades',
            backgroundColor: ['rgba(116, 72, 194, 0.4)', 'rgba(33, 192, 215, 0.4)', 'rgba(217, 158, 43, 0.4)', 'rgba(205, 58, 129, 0.4)'],
            borderWidth: 1,
            borderColor: ['rgba(116, 72, 194, 1)', 'rgba(33, 192, 215, 1)', 'rgba(217, 158, 43, 1)', 'rgba(205, 58, 129, 1)'],
        }]
    }

    const optionsData = {
        plugins: {
            legend: {
                position: 'left'
            }
        }
    }

    new Chart('chart3', { type: 'polarArea', data: chart3data, options: optionsData })

}


function printInversionsChart(coasters) {

    const inversionsCoasters = coasters.filter(eachCoaster => eachCoaster.inversions > 5)
    console.log(inversionsCoasters)


    const inversionsCoastersNames = inversionsCoasters.map(eachCoaster => eachCoaster.name)

    console.log(inversionsCoastersNames.length)

    const chart4data = {
        labels: inversionsCoastersNames,
        datasets: [{
            data: inversionsCoasters.map(eachCoaster => eachCoaster.inversions)
        }],
        backgroundColor: ['rgba(116, 72, 194, 0.4)'],
        borderWidth: 1,
        borderColor: ['rgba(116, 72, 194, 1)']
    }

    const optionsData = {
        plugins: {
            legend: {
                position: 'left'
            }
        }
    }

    new Chart('chart4', { type: 'radar', data: chart4data, options: optionsData })

}


function printMixedChart(selectedCoasters) { }


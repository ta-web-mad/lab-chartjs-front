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
    const selectedCoastersCopy = JSON.parse(JSON.stringify(selectedCoasters))

    /*selectedCoastersCopy.sort((a, b) => {
        return a.speed - b.speed

    })*/
    const coasterName = selectedCoastersCopy.map((eachCoaster) => {
        return eachCoaster.name
    })
    const coasterSpeed = selectedCoastersCopy.map((eachCoaster) => {
        return eachCoaster.speed
    })
    console.log(coasterName)
    const chartData = {
        labels: coasterName,
        datasets: [{
            data: coasterSpeed,
            backgroundColor: ['rgba(116, 72, 194, 0.4)', 'rgba(33, 192, 215, 0.4)', 'rgba(217, 158, 43, 0.4)', 'rgba(205, 58, 129, 0.4)', 'rgba(225, 78, 202, 0.4)'],
            borderColor: ['rgba(116, 72, 194, 1)', 'rgba(33, 192, 215, 1)', 'rgba(217, 158, 43, 1)', 'rgba(205, 58, 129, 1)', 'rgba()'],
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

    const coasterLength = coasters.map((eachCoaster) => {
        return eachCoaster.length
    })

    const coasterInferior1000 = coasterLength.filter((eachCoaster) => {
        return eachCoaster < 1000
    })
    const coasterInferior1500 = coasterLength.filter((eachCoaster) => {
        return eachCoaster >= 1000 && eachCoaster <= 1500
    })
    const coasterSuperior1500 = coasterLength.filter((eachCoaster) => {
        return eachCoaster > 1500
    })




    const chartData = {
        labels: ["-1000", "1000 - 1500", "+1500"],
        datasets: [{
            data: [coasterInferior1000.length, coasterInferior1500.length, coasterSuperior1500.length],
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
    const coasterCountry = coasters.map((eachCoaster) => {
        return eachCoaster.country
    })

    const coasterEEUU = coasterCountry.filter((eachCoaster) => {
        return eachCoaster.includes('United States')
    })

    const coasterSpain = coasterCountry.filter((eachCoaster) => {
        return eachCoaster.includes('Spain')
    })

    const coasterJapòn = coasterCountry.filter((eachCoaster) => {
        return eachCoaster.includes('Japan')
    })

    const coasterChina = coasterCountry.filter((eachCoaster) => {
        return eachCoaster.includes('China')
    })



    const chartData = {
        labels: ['EEUU', 'Japan', 'Spain', 'China'],
        datasets: [{
            data: [coasterEEUU.length, coasterJapòn.length, coasterSpain.length, coasterChina.length],
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

    new Chart('chart3', { type: 'polarArea', data: chartData, options: optionsData })

}


function printInversionsChart(coasters) {
    const coasterName = coasters.map((eachCoaster) => {
        if (eachCoaster.inversions > 5) {
            return eachCoaster.name
        }
    })

    const InversionsName = coasterName.filter((eachCoaster) => {
        return eachCoaster
    })
    const coasterInversions = coasters.map((eachCoaster) => {
        return eachCoaster.inversions
    })

    const coasterMultiInversions = coasterInversions.filter((eachCoaster) => {
        return eachCoaster > 5
    })





    const chartData = {
        labels: coasterName,
        datasets: [{
            data: coasterMultiInversions,
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

    new Chart('chart4', { type: 'radar', data: chartData, options: optionsData })
}


function printMixedChart(selectedCoasters) { }
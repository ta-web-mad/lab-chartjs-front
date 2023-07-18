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

    const coastersName = selectedCoasters.map(eachName => {

        return eachName.name
    })


    const coastersSpeed = selectedCoasters.map(eachSpeed => {

        return eachSpeed.speed
    })


    const chartData = {

        labels: coastersName,
        datasets: [{
            data: coastersSpeed
        }]
    }

    new Chart('chart1', { type: 'bar', data: chartData })

}







function printLengthChart(coasters) {

    const coastersLower = coasters.filter(eachLength => {

        return eachLength.length < 1000

    })
    console.log(coastersLower.length)

    const coastersMedium = coasters.filter(eachLength => {

        return eachLength.length > 1000 && eachLength.length < 1500

    })


    const coastersHigh = coasters.filter(eachLength => {

        return eachLength.length >= 1500

    })



    const chartData = {

        labels: ['<1000', '>1000  <1500', '>1500'],
        datasets: [
            {
                data: coastersLower.length,
                data: coastersMedium.length,
                data: coastersHigh.length
            }]
    }






    new Chart('chart2', { type: 'doughnut', data: chartData })


}









function printHeightChart(coasters) { }


function printInversionsChart(coasters) { }


function printMixedChart(selectedCoasters) { }
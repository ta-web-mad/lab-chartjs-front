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
    
    const nameRoller = selectedCoasters.map(function (coasters) {
        return coasters.name
    })
 console.log(nameRoller)
    const speedRoller = selectedCoasters.map(function (coasters) {
        return coasters.speed
    })
    
    const chartData = {
        
        labels: nameRoller,
        datasets: [{
            data: speedRoller,
            backgroundColor: ['rgba(116, 72, 194, 0.4)', 'rgba(33, 192, 215, 0.4)', 'rgba(217, 158, 43, 0.4)', 'rgba(205, 58, 129, 0.4)', 'rgba(156, 153, 204, 0.4)'],
            borderColor: ['rgba(116, 72, 194, 1)', 'rgba(33, 192, 215, 1)', 'rgba(217, 158, 43, 1)', 'rgba(205, 58, 129, 1)'],
            borderWidth: 2
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

    /*const legendCoaster = coasters.filter(function (eachCoaster) {

        return eachCoaster.length.includes()*/

    const chartData = {

        labels: ['-1000m', '1000-1500m', '+1500m'],
        datasets: [{
            data: [50,100,100],
            backgroundColor: ['rgba(116, 72, 194, 0.4)', 'rgba(33, 192, 215, 0.4)', 'rgba(217, 158, 43, 0.4)', 'rgba(205, 58, 129, 0.4)', 'rgba(156, 153, 204, 0.4)'],
            borderColor: ['rgba(116, 72, 194, 1)', 'rgba(33, 192, 215, 1)', 'rgba(217, 158, 43, 1)', 'rgba(205, 58, 129, 1)'],
            borderWidth: 2
        }]
    }

    const optionsData = {
        plugins: {
            legend: {
                display: true,
                position: "left"
                
            }
        }
    }

    new Chart('chart2', { type: 'doughnut', data: chartData, options: optionsData })


}


function printHeightChart(coasters) { }

const chartData = {

    labels: ['EEUU', 'Japón', 'España',"China"],
    datasets: [{
        data: [50, 100, 75,20],
        backgroundColor: ['rgba(116, 72, 194, 0.4)', 'rgba(33, 192, 215, 0.4)', 'rgba(217, 158, 43, 0.4)', 'rgba(205, 58, 129, 0.4)', 'rgba(156, 153, 204, 0.4)'],
        borderColor: ['rgba(116, 72, 194, 1)', 'rgba(33, 192, 215, 1)', 'rgba(217, 158, 43, 1)', 'rgba(205, 58, 129, 1)'],
        borderWidth: 2
    }]
}

const optionsData = {
    plugins: {
        legend: {
            display: true,
            position: "left"

        }
    }
}

new Chart('chart3', { type: 'polarArea', data: chartData, options: optionsData })

function printInversionsChart(coasters) { }


function printMixedChart(selectedCoasters) { }
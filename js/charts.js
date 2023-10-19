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
        labels: selectedCoasters.map(eachCoaster => eachCoaster.name),

        datasets: [{
            data: selectedCoasters.map(eachCoaster => eachCoaster.speed),
            backgroundColor: ['rgba(116, 72, 194, 0.4)', 'rgba(33, 192, 215, 0.4)', 'rgba(217, 158, 43, 0.4)', 'rgba(205, 58, 129, 0.4', 'rgba(156, 153, 204, 0.4)', 'rgba(225, 78, 202, 0.4)'],
            borderColor: ['rgba(116, 72, 194, 1)', 'rgba(33, 192, 215, 1)', 'rgba(217, 158, 43, 1)', 'rgba(205, 58, 129, 1)', 'rgba(156, 153, 204, 1)', 'rgba(225, 78, 202, 1)'],
            borderWidth: 2
            // mapear las montañas rusas para obtener su speed            
        }]

    }
    const chartOptions = {
        plugins: {
            legend: {
                position: 'false'
            }
        }
    }
    new Chart('chart1', { type: 'bar', data: chartData, options: chartOptions })
}


function printLengthChart(coasters) {

    const shortCoaster = []
    const mediumCoaster = []
    const largeCoaster = []


    coasters.forEach(eachCoaster => {
        //length = eachCoaster.length

        if (eachCoaster.length < 1000) {
            shortCoaster.push(eachCoaster.length)
        }
        else if (eachCoaster.length > 1000 && eachCoaster.length < 1500) {
            mediumCoaster.push(eachCoaster.length)

        } else {
            largeCoaster.push(eachCoaster.length)
        }
    })


    const chartData = {
        labels: ['-1000m', '1000-1500m', '+1500m'],
        datasets: [{
            data: [shortCoaster.length, mediumCoaster.length, largeCoaster.length],
            backgroundColor: ['rgba(116, 72, 194, 0.4)', 'rgba(33, 192, 215, 0.4)', 'rgba(217, 158, 43, 0.4)', 'rgba(205, 58, 129, 0.4', 'rgba(156, 153, 204, 0.4)', 'rgba(225, 78, 202, 0.4)'],
            borderColor: ['rgba(116, 72, 194, 1)', 'rgba(33, 192, 215, 1)', 'rgba(217, 158, 43, 1)', 'rgba(205, 58, 129, 1)', 'rgba(156, 153, 204, 1)', 'rgba(225, 78, 202, 1)'],
            borderWidth: 2
            // mapear las montañas rusas para obtener su speed            
        }]

    }
    const chartOptions = {
        plugins: {
            legend: {
                position: 'left',
            }
        }
    }
    new Chart('chart2', { type: 'doughnut', data: chartData, options: chartOptions })

}




function printHeightChart(coasters) {

    const coastersEeuu = coasters.filter(eachCoaster => {
        return eachCoaster.country === 'United States'
    })
    const coastersSpain = coasters.filter(eachCoaster => {
        return eachCoaster.country === 'Spain'

    })
    const coastersJapan = coasters.filter(eachCoaster => {
        return eachCoaster.country === 'Japan'
    })
    const coastersChina = coasters.filter(eachCoaster => {
        return eachCoaster.country === 'China'

    })


    const chartData = {
        labels: ['EE.UU', 'Spain', 'Japan', 'China'],
        datasets: [{
            data: [coastersEeuu.length, coastersSpain.length, coastersJapan.length, coastersChina.length],
            backgroundColor: ['rgba(116, 72, 194, 0.4)', 'rgba(33, 192, 215, 0.4)', 'rgba(217, 158, 43, 0.4)', 'rgba(205, 58, 129, 0.4', 'rgba(156, 153, 204, 0.4)', 'rgba(225, 78, 202, 0.4)'],
            borderColor: ['rgba(116, 72, 194, 1)', 'rgba(33, 192, 215, 1)', 'rgba(217, 158, 43, 1)', 'rgba(205, 58, 129, 1)', 'rgba(156, 153, 204, 1)', 'rgba(225, 78, 202, 1)'],
            borderWidth: 2
            // mapear las montañas rusas para obtener su speed            
        }]

    }

    const chartOptions = {
        plugins: {
            legend: {
                position: 'left',
            }
        }
    }

    new Chart('chart3', { type: 'polarArea', data: chartData, options: chartOptions })


}


function printInversionsChart(coasters) {

    const coastersInversors = coasters.filter(eachCoaster => {

        return eachCoaster.inversions > 5

    })
    console.log(coastersInversors.map(eachCoaster => eachCoaster.name))

    const chartData = {
        labels: coastersInversors.map(eachCoaster => eachCoaster.name),
        datasets: [{
            data: coastersInversors.map(eachCoaster => eachCoaster.inversions),
            backgroundColor: ['rgba(116, 72, 194, 0.4)', 'rgba(33, 192, 215, 0.4)', 'rgba(217, 158, 43, 0.4)', 'rgba(205, 58, 129, 0.4', 'rgba(156, 153, 204, 0.4)', 'rgba(225, 78, 202, 0.4)'],
            borderColor: ['rgba(116, 72, 194, 1)', 'rgba(33, 192, 215, 1)', 'rgba(217, 158, 43, 1)', 'rgba(205, 58, 129, 1)', 'rgba(156, 153, 204, 1)', 'rgba(225, 78, 202, 1)'],
            borderWidth: 2
            // mapear las montañas rusas para obtener su speed            
        }]

    }
    const chartOptions = {
        plugins: {
            legend: {

            }
        }
    }

    new Chart('chart4', { type: 'radar', data: chartData, options: chartOptions })


}


function printMixedChart(selectedCoasters) {

    const chartData = {
        labels: selectedCoasters.map(eachCoaster => eachCoaster.name),
        datasets: [{
            data: selectedCoasters.map(eachCoaster => eachCoaster.speed),
            backgroundColor: ['rgba(116, 72, 194, 0.4)', 'rgba(33, 192, 215, 0.4)', 'rgba(217, 158, 43, 0.4)', 'rgba(205, 58, 129, 0.4', 'rgba(156, 153, 204, 0.4)', 'rgba(225, 78, 202, 0.4)'],
            borderColor: ['rgba(116, 72, 194, 1)', 'rgba(33, 192, 215, 1)', 'rgba(217, 158, 43, 1)', 'rgba(205, 58, 129, 1)', 'rgba(156, 153, 204, 1)', 'rgba(225, 78, 202, 1)'],
            borderWidth: 2,

        }, {
            data: selectedCoasters.map(eachCoaster => eachCoaster.height),
            backgroundColor: ['rgba(116, 72, 194, 0.4)', 'rgba(33, 192, 215, 0.4)', 'rgba(217, 158, 43, 0.4)', 'rgba(205, 58, 129, 0.4', 'rgba(156, 153, 204, 0.4)', 'rgba(225, 78, 202, 0.4)'],
            borderColor: ['rgba(116, 72, 194, 1)', 'rgba(33, 192, 215, 1)', 'rgba(217, 158, 43, 1)', 'rgba(205, 58, 129, 1)', 'rgba(156, 153, 204, 1)', 'rgba(225, 78, 202, 1)'],
            borderWidth: 2,
            type: 'line',


        }
        ]
    }
    new Chart('chart5', { type: 'bar', data: chartData, options: chartOptions })






}
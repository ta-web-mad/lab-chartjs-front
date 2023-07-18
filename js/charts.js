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
    const collection = [...selectedCoasters]

    const map1 = collection.map(x => x.name);

    const map2 = collection.map(y => y.speed);

    const chartData = {
        labels: map1,
        datasets: [{
            data: map2,
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

    const coasterHigh = [...coasters]

    const map1 = coasterHigh.map(x => x.length);

    const highestCoast = map1.filter(coast => coast > 1000);
    const middleCoast = map1.filter(coast => coast > 1000 && coast <= 1500);
    const smallestCoast = map1.filter(coast => coast < 1000);


    // const cHigh = map1.filter(function (c) {
    //     if (c > 1000) {
    //         console.log
    //     }
    // })






    const chartData = {
        labels: ['- 1000m', '1000-1500m', '+1500m'],
        datasets: [{
            data: [highestCoast.length, middleCoast.length, smallestCoast.length],
            backgroundColor: ['rgba(116, 72, 194, 0.4)', 'rgba(33, 192, 215, 0.4)', 'rgba(217, 158, 43, 0.4)', 'rgba(205, 58, 129, 0.4)'],
            borderColor: ['rgba(116, 72, 194, 1)', 'rgba(33, 192, 215, 1)', 'rgba(217, 158, 43, 1)', 'rgba(205, 58, 129, 1)'],
            borderWidth: 3
        }]
    }

    const optionsData = {
        plugins: {
            legend: {
                position: 'right'
            }
        }
    }

    new Chart('chart2', { type: 'doughnut', data: chartData, options: optionsData })

}


function printHeightChart(coasters) { }


function printInversionsChart(coasters) { }


function printMixedChart(selectedCoasters) { }
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
            colors: {
                solids: ['rgba(116, 72, 194, 1)', 'rgba(33, 192, 215, 1)', 'rgba(217, 158, 43, 1)', 'rgba(205, 58, 129, 1)', 'rgba(156, 153, 204, 1)', 'rgba(225, 78, 202, 1)'],
                alphas: ['rgba(116, 72, 194, 0.4)', 'rgba(33, 192, 215, 0.4)', 'rgba(217, 158, 43, 0.4)', 'rgba(205, 58, 129, 0.4)', 'rgba(156, 153, 204, 0.4)', 'rgba(225, 78, 202, 0.4)']
            }
        }]
    }

    new Chart('chart1', { type: 'bar', data: chartData, })
}


function printLengthChart(coasters) {
    const altura1 = coasters.filter(elm => {
        return elm.length <= 1000
    })

    const altura2 = coasters.filter(elm => {
        if (elm.length > 1000 && elm.length < 1500)
            return elm
    })

    const altura3 = coasters.filter(elm => {
        return elm.length > 1500
    })


    console.log(altura3)

    const chartData = {
        labels: ['-1000m', '1000m-1500m', '+1500m'],
        datasets: [{
            data: [altura1.length, altura2.length, altura3.length]
        }]

    }
    new Chart('chart2', { type: 'doughnut', data: chartData, })
}


function printHeightChart(coasters) {
    //Comparador de países (propiedad `country`) de todas las montañas rusas en cuatro clasificaciones: EEUU, España, Japón y China
    const pais1 = coasters.filter(elm => {
        if (elm.country === 'United States') {
            return elm
        }
    })

    const pais2 = coasters.filter(elm => {
        return elm.country == 'Spain'
    })

    const pais3 = coasters.filter(elm => {
        return elm.country == 'Japan'
    })
    const pais4 = coasters.filter(elm => {
        return elm.country == 'China'
    })

    const chartData = {
        labels: ['EEUU', 'España', 'Japón', 'China'],
        datasets: [{
            data: [pais1.length, pais2.length, pais3.length, pais4.length]
        }]



    }

    new Chart('chart3', { type: 'polarArea', data: chartData, })


}


function printInversionsChart(coasters) {
    const inversiones = coasters.filter(elm => {
        return elm.inversions >= 5

    })

    console.log(inversiones)

    const chartData = {
        labels: [inversiones],
        datasets: [{
            data: [inversiones]
        }]



    }
    console.log(pais1)
    new Chart('chart4', { type: 'radar', data: chartData, })
}


function printMixedChart(selectedCoasters) { }
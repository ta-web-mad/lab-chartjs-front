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
    console.log(selectedCoasters)
    const chartData = {
        labels: selectedCoasters.map(elm => elm.name),
        datasets: [{
            data: selectedCoasters.map(elm => elm.speed),
            backgroundColor: [colors.alphas[0], colors.alphas[1], colors.alphas[3], colors.alphas[4],],
            borderColor: [colors.solids[0], colors.solids[1], colors.solids[3], colors.solids[4],],
            borderWidth: 5

        }]
    }

    const chartOption = {
        plugins: {
            legend: {
                display: false
            }

        }
    }

    new Chart('chart1', {
        type: 'bar',
        data: chartData,
        options: chartOption
    })
}



function printLengthChart(coasters) {
    let lowL = coasters.filter(function (coaster) {

        return coaster.length <= 1000
    })
    let mediumL = coasters.filter(function (coaster) {

        return coaster.length > 1000 && coaster.length <= 1500
    })
    let highL = coasters.filter(function (coaster) {
        return coaster.length > 1500
    })
    const chartData = {
        labels: ["-1000 m ", "1000 - 1500 m ", "+ 1500 m "],
        datasets: [{
            data: [lowL.length, mediumL.length, highL.length],
            backgroundColor: [colors.alphas[0], colors.alphas[1], colors.alphas[3]],
            borderColor: [colors.solids[0], colors.solids[1], colors.solids[3]],
            borderWidth: 5
        }]
    }
    const chartOption = {
        plugins: {
            legend: {
                position: "left"
            }

        }
    }



    new Chart('chart2', {
        type: 'doughnut',
        data: chartData,
        options: chartOption
    })
}



function printHeightChart(coasters) {
    let usa = coasters.filter(function (coaster) {
        return coaster.country === "United States"
    })
    let japan = coasters.filter(function (coaster) {
        return coaster.country === "Japan"
    })
    let china = coasters.filter(function (coaster) {
        return coaster.country === "China"
    })
    let Espana = coasters.filter(function (coaster) {
        return coaster.country === "Spain"
    })

    const chartData = {
        labels: ["EEUU", "España", "Japan", "China"],
        datasets: [{
            data: [china.length, japan.length, Espana.length, usa.length],
            backgroundColor: [colors.alphas[0], colors.alphas[1], colors.alphas[3], colors.alphas[2]],
            borderColor: [colors.solids[0], colors.solids[1], colors.solids[3], colors.alphas[2]],
            borderWidth: 5

        }]
    }


    const chartOption = {
        plugins: {
            legend: {
                position: "left"
            }
        }
    }
    new Chart('chart3', {
        type: 'polarArea', data: chartData,
        options: chartOption
    })
}


function printInversionsChart(coasters) {
    let inversions = coasters.filter(function (coaster) {
        return coaster.inversions > 5
        console.log(inversions)

    })



    const chartData = {
        labels: inversions.map(elm => {
            return elm.name
        }),
        datasets: [{
            data: coasters.map(elm => {
                return elm.inversions
            }),
            fill: true,
            backgroundColor: inversions.map(elm => {
                return colors.alphas[1]
            }),

            borderColor: inversions.map(elm => {
                return colors.alphas[1]
            }),
            borderWidth: 5
        }]


    }


    new Chart('chart4', {
        type: 'radar', data: chartData,

    })

}




function printMixedChart(selectedCoasters) {
    const chartData = {
        labels: selectedCoasters.map(elm => elm.name),
        datasets: [{
            data: selectedCoasters.map(elm => elm.speed),
            backgroundColor: [colors.alphas[0]],
            borderColor: [colors.solids[0]],
            borderWidth: 5

        },
        {
            data: selectedCoasters.map(elm => elm.height),
            type: "line"

        }]


    }
    new Chart('chart5', {
        type: 'bar', data: chartData,


    })
}
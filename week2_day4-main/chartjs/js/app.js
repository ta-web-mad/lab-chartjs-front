
const chartData = {
    labels: ['uno', 'dos', 'tres'],
    datasets: [{
        data: [20, 70, 45],
        backgroundColor: ['red', 'green', 'blue'],
        borderColor: ['blue', 'red', 'green'],
        borderWidth: 5
    }]
}

const chartOptions = {
    plugins: {
        legend: {
            position: 'left'
        }
    }
}


new Chart('myChart1', {
    // type: 'doughnut',
    // type: 'pie',
    // type: 'line',
    // type: 'bar',
    // type: 'radar',
    type: 'polarArea',
    data: chartData,
    options: chartOptions
})
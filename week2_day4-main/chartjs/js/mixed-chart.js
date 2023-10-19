
const chartData = {
    labels: ['uno', 'dos', 'tres'],
    datasets: [
        {
            data: [30, 40, 70],
            backgroundColor: ['red', 'green', 'blue'],
            borderColor: ['blue', 'red', 'green'],
            borderWidth: 5,
            type: 'line'                // diff chart types per dataset
        },
        {
            data: [20, 70, 45],
            backgroundColor: ['red', 'green', 'blue'],
            borderColor: ['blue', 'red', 'green'],
            borderWidth: 5
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


new Chart('myChart1', {
    type: 'bar',
    data: chartData,
    options: chartOptions
})
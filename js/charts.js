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
            data: selectedCoasters.map(elm => elm.speed) ,
            backgroundColor:['rgba(116, 72, 194, 0.4)', 'rgba(33, 192, 215, 0.4)', 'rgba(217, 158, 43, 0.4)', 'rgba(205, 58, 129, 0.4)', 'rgba(156, 153, 204, 0.4)', 'rgba(225, 78, 202, 0.4)'],
            borderColor: ['rgba(116, 72, 194, 1)', 'rgba(33, 192, 215, 1)', 'rgba(217, 158, 43, 1)', 'rgba(205, 58, 129, 1)', 'rgba(156, 153, 204, 1)', 'rgba(225, 78, 202, 1)'],
            borderWidth: 5      
        }]
    }
      
    new Chart('chart1', { type: 'bar', data: chartData })
}



function printLengthChart(coasters) {
    const chartData2={
        labels: ['-1000','1000 1500','+1500'],
        datasets: [{
                data: [
                    coasters.filter(elm => elm.length < 1000).length,
                    coasters.filter(elm => elm.length >=1000 && elm.length<1500).length,
                    coasters.filter(elm => elm.length >= 1500).length,
                ],
                backgroundColor: ['rgba(116, 72, 194, 0.4)', 'rgba(33, 192, 215, 0.4)', 'rgba(217, 158, 43, 0.4)'],
                borderColor: ['rgba(116, 72, 194, 1)', 'rgba(33, 192, 215, 1)', 'rgba(217, 158, 43, 1)']

        }]
    }

  
    new Chart('chart2', { type: 'doughnut', data : chartData2 })
 }


function printHeightChart(coasters) { 
    const chartData3={
        labels: ['EEUU','Japón','España', 'China'],
        datasets: [{
                data: [
                    coasters.filter(elm => elm.country === 'United States').length,
                    coasters.filter(elm => elm.country === 'Japan').length,
                    coasters.filter(elm => elm.country === 'Spain').length,
                    coasters.filter(elm => elm.country === 'China').length
                ],
                backgroundColor: ['rgba(116, 72, 194, 0.4)', 'rgba(33, 192, 215, 0.4)', 'rgba(217, 158, 43, 0.4)', 'rgba(205, 58, 129, 0.4)'],
                borderColor: ['rgba(116, 72, 194, 1)', 'rgba(33, 192, 215, 1)', 'rgba(217, 158, 43, 1)', 'rgba(205, 58, 129, 1)', 'rgba(156, 153, 204, 1)']

        }]
    }

  
    new Chart('chart3', { type: 'polarArea', data : chartData3 })}


function printInversionsChart(coasters) { 

    const inver = coasters.filter(elm => elm.inversions > 5)
    console.log("las de mas de 5", inver)

    const chartData4={
                 labels: inver.map(element =>element.name),
                datasets: [{
                   data: inver.map(element =>element.inversions),
                   backgroundColor:['rgba(33, 192, 215, 0.4)'],
                   borderColor:['rgba(205, 58, 129, 1)']
        
        }]
    }

  
    new Chart('chart4', { type: 'radar', data : chartData4 })}



function printMixedChart(selectedCoasters) {
    
    const chartData = {
        labels: selectedCoasters.map(elm => elm.name),
        datasets: [{
            data: selectedCoasters.map(elm => elm.speed) ,
            backgroundColor:['rgba(116, 72, 194, 0.4)', 'rgba(33, 192, 215, 0.4)', 'rgba(217, 158, 43, 0.4)', 'rgba(205, 58, 129, 0.4)', 'rgba(156, 153, 204, 0.4)', 'rgba(225, 78, 202, 0.4)'],
            borderColor: ['rgba(116, 72, 194, 1)', 'rgba(33, 192, 215, 1)', 'rgba(217, 158, 43, 1)', 'rgba(205, 58, 129, 1)', 'rgba(156, 153, 204, 1)', 'rgba(225, 78, 202, 1)'],
            borderWidth: 5      
        }]
    }
    const charData2 = {
        labels:[],
        datasets: selectedCoasters.map(elm => elm.height)
    }
      
    new Chart('chart5', { type: 'bar', data: chartData })
    new Chart('chart6', { type: 'radar', data: chartData2 })
    
 }
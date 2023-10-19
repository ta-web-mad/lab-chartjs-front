fetch("https://multiapi-app.fly.dev/coasters/allCoasters")
  .then((response) => response.json())
  .then((coasters) => printCoastersCharts(coasters));

function groupByCountry(array, param) {
  const result = array.filter((elm) => {
    if (elm.country === param) {
      return elm;
    }
  });
  return result.length;
}

function countInversions(array) {
  const result = array.filter((elm) => {
    if (elm.inversions >= 7) {
      return elm;
    }
  });
  console.log("hola", result);
  return result;
}

function printCoastersCharts(coasters) {
  const selectedCoasters = coasters.slice(0, 5);

  printSpeedChart(selectedCoasters);
  printLengthChart(coasters);
  printHeightChart(coasters);
  printInversionsChart(coasters);
  printMixedChart(selectedCoasters);
}

function printSpeedChart(selectedCoasters) {
  const charOptions = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  const chartData = {
    labels: selectedCoasters.map((elm) => elm.name),
    datasets: [
      {
        data: selectedCoasters.map((elm) => elm.speed),
        backgroundColor: colors.alphas.map((elm) => elm),
        borderColor: colors.solids.map((elm) => elm),
        borderWidth: 2,
      },
    ],
  };

  new Chart("chart1", { type: "bar", data: chartData, options: charOptions });
}

function printLengthChart(coasters) {
  const charOptions = {
    plugins: {
      legend: {
        position: "left",
      },
    },
  };
  let mesMil = coasters.filter((elm) => {
    if (elm.length < 1000) {
      return elm;
    }
  });

  let entreMil = coasters.filter((elm) => {
    if (elm.length >= 1000 && elm.length <= 1500) {
      return elm;
    }
  });
  let masMil = coasters.filter((elm) => {
    if (elm.length > 1500) {
      return elm;
    }
  });
  const chartData = {
    labels: ["-1000m", "1000-1500m", "+1500m"],
    datasets: [
      {
        data: [mesMil.length, entreMil.length, masMil.length],
        backgroundColor: colors.alphas.map((elm) => elm),
        borderColor: colors.solids.map((elm) => elm),
        borderWidth: 2,
      },
    ],
  };
  new Chart("chart2", {
    type: "doughnut",
    data: chartData,
    options: charOptions,
  });
}
function printHeightChart(coasters) {
  const charOptions = {
    scales: {
      r: {
        ticks: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        position: "left",
      },
    },
  };

  const chartData = {
    labels: ["EEUU", "Japón", "España", "China"],
    datasets: [
      {
        data: [
          groupByCountry(coasters, "United States"),
          groupByCountry(coasters, "Japan"),
          groupByCountry(coasters, "Spain"),
          groupByCountry(coasters, "China"),
        ],
        backgroundColor: colors.alphas.map((elm) => elm),
        borderColor: colors.solids.map((elm) => elm),
        borderWidth: 2,
      },
    ],
  };
  new Chart("chart3", {
    type: "polarArea",
    data: chartData,
    options: charOptions,
  });
}

function printInversionsChart(coasters) {
  const top12 = countInversions(coasters);
  const charOptions = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      r: {
        ticks: {
          display: false,
        },
      },
    },
  };
  const chartData = {
    labels: top12.map((elm) => elm.name),
    datasets: [
      {
        data: top12.map((elm) => elm.inversions),
        backgroundColor: colors.alphas[1],
        borderColor: colors.solids[1],
        borderWidth: 2,
      },
    ],
  };

  new Chart("chart4", { type: "radar", data: chartData, options: charOptions });
}

function printMixedChart(selectedCoasters) {
  const charOptions = {
    plugins: {
      legend: {
        display: false,
      },
    }
  };

  const chartData = {
    labels: selectedCoasters.map((elm) => elm.name),
    datasets: [
      {
        data: selectedCoasters.map((elm) => elm.height),
        backgroundColor: colors.alphas[1],
        borderColor: colors.solids[1],
        borderWidth: 7,
        type: "line",
        tension: 0.4,
      },
      {
        data: selectedCoasters.map((elm) => elm.speed),
        backgroundColor: colors.alphas[2],
        borderColor: colors.solids[2],
      },
    ],
  };

  new Chart("chart5", { type: "bar", data: chartData, options: charOptions });
}

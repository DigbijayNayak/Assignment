const red = "rgb(0, 99, 132)";
const color = Chart.helpers.color;
const config = {
  type: "radar",
  data: {
    labels: [
      ["Eating", "Dinner"],
      ["Drinking", "Water"],
      "Sleeping",
      ["Designing", "Graphics"],
      "Coding",
      "Cycling",
      "Running",
    ],
    datasets: [
      {
        label: "My dataset",
        backgroundColor: color(red).alpha(0.2).rgbString(),
        borderColor: red,
        pointBackgroundColor: red,
        data: [80, 90, 60, 65, 78, 97, 55],
      },
    ],
  },
  options: {
    scales: {
      // <-- Note change in options from scale to scales
      r: {
        grid: {
          circular: true,
        },
        beginAtZero: true,
      },
    },
  },
};

window.onload = function () {
  window.myRadar = new Chart(document.getElementById("chart"), config);
};

var ctx = document.getElementById("myBarChart").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'bar',

  data: {
    label: "Dataset",
    datasets: [{

      data: [29.00, 10.05, 120.00, 55.00],

      backgroundColor: ["#4c506b", "#e2a700", "#64bc00",
        "#4095db"
      ]
    }],
    labels: ["1", "2", "3", "4"],
  },
  options: {
    legend: {
      display: false
    }
  }
});

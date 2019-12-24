var ctx = document.getElementById("myBarChart").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'bar',

  data: {
    label: "Dataset",
    datasets: [{

      data: [29.00, 10.05, 120.00, 55.00],

      backgroundColor: ["#8aca35", "#8aca35", "#8aca35",
        "#8aca35"
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

// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// labelChart Chart Example
var ctxP = document.getElementById("labelChart").getContext('2d');
var myPieChart = new Chart(ctxP, {
  type: 'pie',
  data: {
    labels: ["Прямой бюджетный эффект", "Косвенный бюджетный эффект"],
    datasets: [{
      data: [113, 208.5],
      backgroundColor: ["#4f81be", "#c0504e"],
      hoverBackgroundColor: ["#4c7bb3", "#b44947"]
    }]
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false
    },

  }
});

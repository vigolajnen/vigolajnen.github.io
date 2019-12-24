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
      backgroundColor: ["#8aca35", "#77ae2e"],
      hoverBackgroundColor: ["#8aca35", "#77ae2e"]
    }]
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false
    },

  }
});

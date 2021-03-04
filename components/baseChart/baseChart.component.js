app.component('baseChart', {
    templateUrl: 'components/baseChart/baseChart.component.html',
    bindings: {
        id: '<?',
        customClasses: '<?',
        chartType: '@', // chart Type. Can be line, bar, doughnut, radar, pie, polar-area, horizontal-bar, bubble, base
        chartData: '<', // series data
        chartLabels: '<', // x axis labels
        chartOptions: '<?', // (default: {}): Chart.js options
        chartSeries: '<?', // (default: []): series labels
        chartClick: '<?', // (optional): onclick event handler
        chartHover: '<?', // (optional): onmousemove event handler
        chartColors: '<?', // (default to global colors): colors for the chart
        chartDatasetOverride: '<?', // (optional): override datasets individually
    },
    controller: function($scope) {
        $scope.type = null;

        this.$onChanges = () => {
        }

        // Handler del click sul grafico. Ci si aspetta che in input ci sia una funzione
        $scope.onClick = () => {
            $scope.$ctrl.chartClick;
        }

        // funzione chiamata al passaggo del mouse sul grafico
        $scope.onHover = () => {
            $scope.$ctrl.chartHover;
        }
    }
})